package com.project.mobileapi.user;

import com.project.mobileapi.model.User;

import java.io.IOException;

public interface UserService {

    User register(UserDTO userDTO) throws IOException;
    UserDTO findOneByUsername(String username);
    UserDTO saveUser(UserDTO userDTO) throws IOException;
    User findUserByEmail(String email);
    void createPasswordResetTokenForUser(final User user, final String token);
    String validatePasswordResetToken(String token);
    User findUserByPasswordResetToken(String token);
    User changeUserPassword(User user, String newPassword);
    void deletePasswordResetToken(String token);

}
