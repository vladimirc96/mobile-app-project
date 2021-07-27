package com.project.mobileapi.user;

import com.project.mobileapi.model.User;

import java.io.IOException;

public interface UserService {

    User register(UserDTO userDTO) throws IOException;
    UserDTO findOneByUsername(String username);
    UserDTO saveUser(UserDTO userDTO) throws IOException;
    
}
