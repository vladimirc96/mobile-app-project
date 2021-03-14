package com.project.mobileapi.user;

import com.project.mobileapi.model.Location;
import com.project.mobileapi.model.Role;
import com.project.mobileapi.model.User;
import com.project.mobileapi.repository.RoleRepository;
import com.project.mobileapi.repository.UserRepository;
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
                .image(userDTO.getImage().getBytes())
                .build();
        return userRepository.save(user);
    }

    @Override
    public UserDTO findOneByUsername(String username) {
        return UserAdapter.toDto(userRepository.findOneByUsername(username));
    }

    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        return UserAdapter.toDto(userRepository.save(UserAdapter.toModel(userDTO)));
    }
}
