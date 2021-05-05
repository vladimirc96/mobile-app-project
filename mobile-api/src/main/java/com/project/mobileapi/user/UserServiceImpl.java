package com.project.mobileapi.user;

import com.project.mobileapi.exceptions.InvalidPasswordException;
import com.project.mobileapi.model.Location;
import com.project.mobileapi.model.Role;
import com.project.mobileapi.model.User;
import com.project.mobileapi.repository.RoleRepository;
import com.project.mobileapi.repository.UserRepository;
import com.project.mobileapi.util.PasswordValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService{

    private static final Long USER_ROLE_ID = 1L;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Override
    public User register(UserDTO userDTO) throws IOException {
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
        return UserAdapter.toDto(userRepository.save(UserAdapter.toModel(userDTO)));
    }
}
