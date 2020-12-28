package com.project.mobileapi.user;

import com.project.mobileapi.model.Location;
import com.project.mobileapi.model.Role;
import com.project.mobileapi.model.User;
import com.project.mobileapi.repository.RoleRepository;
import com.project.mobileapi.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService{

    private static final Long USER_ROLE_ID = 1L;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Override
    public User register(UserDTO userDTO) {
        String salt = BCrypt.gensalt();
        Role role = roleRepository.findOneById(USER_ROLE_ID);
        User user = User.builder()
                .name(userDTO.getName())
                .lastName(userDTO.getLastName())
                .username(userDTO.getUsername())
                .password(BCrypt.hashpw(userDTO.getPassword(), salt))
                .email(userDTO.getEmail())
                .phoneNumber(userDTO.getPhoneNumber())
                .location(new Location(userDTO.getLocation().getId(), userDTO.getLocation().getValue()))
                .roles(new ArrayList<Role>() { { add(role); } })
                .build();
        return userRepository.save(user);
    }
}
