package com.project.mobileapi.user;

import com.project.mobileapi.model.User;

public interface UserService {

    User register(UserDTO userDTO);
    UserDTO findOneByUsername(String username);
}
