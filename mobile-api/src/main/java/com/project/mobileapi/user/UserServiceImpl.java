package com.project.mobileapi.user;

import com.project.mobileapi.exceptions.InvalidPasswordException;
import com.project.mobileapi.exceptions.UsersExistsException;
import com.project.mobileapi.model.Location;
import com.project.mobileapi.model.PasswordResetToken;
import com.project.mobileapi.model.Role;
import com.project.mobileapi.model.User;
import com.project.mobileapi.repository.PasswordTokenRepository;
import com.project.mobileapi.repository.RoleRepository;
import com.project.mobileapi.repository.UserRepository;
import com.project.mobileapi.util.PasswordValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService{

    private static final Long USER_ROLE_ID = 1L;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordTokenRepository passwordTokenRepository;

    @Override
    public User register(UserDTO userDTO) throws IOException {
        if(userRepository.findOneByUsername(userDTO.getUsername()) != null){
            throw new UsersExistsException(UsersExistsException.USER_EXISTS_MESSAGE);
        }
        if(!PasswordValidator.isValid(userDTO.getPassword())){
            throw new InvalidPasswordException(InvalidPasswordException.INVALID_PASSWORD_MESSAGE);
        }
        String salt = BCrypt.gensalt();
        Role role = roleRepository.findOneById(USER_ROLE_ID);
        User user = User.builder()
                .firstName(userDTO.getFirstName())
                .lastName(userDTO.getLastName())
                .username(userDTO.getUsername())
                .password(BCrypt.hashpw(userDTO.getPassword(), salt))
                .email(userDTO.getEmail())
                .phoneNumber(userDTO.getPhoneNumber())
                .location(userDTO.getLocation() != null ? new Location(userDTO.getLocation().getId(), userDTO.getLocation().getValue()) : null)
                .roles(new ArrayList<Role>() { { add(role); } })
                .entryDate(LocalDate.now())
                .image(userDTO.getImage() != null ? userDTO.getImage().getBytes() : null)
                .build();
        return userRepository.save(user);
    }

    @Override
    public UserDTO findOneByUsername(String username) {
        return UserAdapter.toDto(userRepository.findOneByUsername(username));
    }

    @Override
    public UserDTO saveUser(UserDTO userDTO) throws IOException {
        User user = userRepository.findOneById(userDTO.getId());
        if(user.getImage() != null && userDTO.getImage() == null){
            userDTO.setImageBytes(user.getImage());
        }
        User updatedUser = UserAdapter.toModel(userDTO);
        updatedUser.setRoles(user.getRoles());
        return UserAdapter.toDto(userRepository.save(updatedUser));
    }

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    @Override
    public void createPasswordResetTokenForUser(User user, String token) {
        final PasswordResetToken myToken = new PasswordResetToken(token, user);
        passwordTokenRepository.save(myToken);
    }

    @Override
    public String validatePasswordResetToken(String token) {
        final PasswordResetToken passToken = passwordTokenRepository.findByToken(token);

        return !isTokenFound(passToken) ? "invalidToken"
                : isTokenExpired(passToken) ? "expired"
                : null;
    }

    @Override
    public User findUserByPasswordResetToken(String token) {
        return passwordTokenRepository.findByToken(token).getUser();
    }

    @Override
    public User changeUserPassword(User user, String newPassword) {
        if(!PasswordValidator.isValid(newPassword)){
            throw new InvalidPasswordException(InvalidPasswordException.INVALID_PASSWORD_MESSAGE);
        }
        String salt = BCrypt.gensalt();
        user.setPassword(BCrypt.hashpw(newPassword, salt));
        return userRepository.save(user);
    }

    @Override
    public void deletePasswordResetToken(String token) {
        PasswordResetToken passwordResetToken = passwordTokenRepository.findByToken(token);
        passwordTokenRepository.delete(passwordResetToken);
    }

    @Override
    public String updatePassword(UpdatePasswordDTO updatePasswordDTO, String username) {
        User user = userRepository.findOneByUsername(username);

        if(!PasswordValidator.isValid(updatePasswordDTO.getNewPassword())){
            throw new InvalidPasswordException(InvalidPasswordException.INVALID_PASSWORD_MESSAGE);
        }

        String result = "";
        if(!updatePasswordDTO.getNewPassword().equals(updatePasswordDTO.getConfirmPassword())){
            result = "Potvrda lozinke nije ispravna";
        }

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        if(passwordEncoder.matches(updatePasswordDTO.getOldPassword(), user.getPassword())){
            String salt = BCrypt.gensalt();
            user.setPassword(BCrypt.hashpw(updatePasswordDTO.getNewPassword(), salt));
            userRepository.save(user);
            result = "Uspešno izmenjena šifra";
        }
        return result;
    }

    private boolean isTokenFound(PasswordResetToken passToken) {
        return passToken != null;
    }

    private boolean isTokenExpired(PasswordResetToken passToken) {
        final Calendar cal = Calendar.getInstance();
        return passToken.getExpiryDate().before(cal.getTime());
    }
}
