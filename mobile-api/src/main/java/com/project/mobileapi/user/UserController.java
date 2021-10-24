package com.project.mobileapi.user;

import com.project.mobileapi.email.MailService;
import com.project.mobileapi.model.User;
import com.project.mobileapi.security.TokenUtils;
import com.project.mobileapi.util.ObjectUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;
import java.util.UUID;


@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/users")
public class UserController {

    private final UserService userService;
    private final TokenUtils tokenUtils;
    private final MailService mailService;

    @PostMapping(value = "/register", consumes = {"multipart/form-data"})
    public ResponseEntity<UserDTO> register(@Valid @ModelAttribute UserDTO userDTO) throws IOException {
        User user = userService.register(userDTO);
        return new ResponseEntity<>(UserAdapter.toDto(user), HttpStatus.CREATED);
    }

    @GetMapping
    @PreAuthorize("hasAuthority('GET_USER_DETAILS')")
    public ResponseEntity<UserDTO> getUser(HttpServletRequest request){
        String username = tokenUtils.getUsernameFromToken(tokenUtils.getToken(request));
        UserDTO user = userService.findOneByUsername(username);
        return new ResponseEntity<>(ObjectUtils.isEmpty(user), HttpStatus.OK);
    }

    @GetMapping("user-info")
    public ResponseEntity<UserDTO> getUserInfo(@RequestParam String username){
        UserDTO user = userService.findOneByUsername(username);
        return new ResponseEntity<>(ObjectUtils.isEmpty(user), HttpStatus.OK);
    }

    @PutMapping(consumes = {"multipart/form-data"})
    public ResponseEntity<UserDTO> saveUser(@ModelAttribute UserDTO userDTO) throws IOException {
        return new ResponseEntity<>(userService.saveUser(userDTO), HttpStatus.OK);
    }

    // Reset password
    @PostMapping("/reset-password")
    public void resetPassword(final HttpServletRequest request, @RequestParam("email") final String userEmail) {
        final User user = userService.findUserByEmail(userEmail);
        if (user != null) {
            final String token = UUID.randomUUID().toString();
            userService.createPasswordResetTokenForUser(user, token);
            mailService.sendResetPasswordMail(getAppUrl(request), request.getLocale(), token, user);
        }
    }

    @GetMapping("/change-password")
    public String showChangePasswordPage(@RequestParam("token") String token, final HttpServletRequest request, final HttpServletResponse response) throws IOException {
        String result = userService.validatePasswordResetToken(token);
        if(result == null) {
            response.sendRedirect("http://localhost:3000/change-password/" + token);
            return "Redirected";
        } else {
            return "Redirected";
        }
    }

    @PutMapping("/save-password")
    public ResponseEntity<String> savePassword(@RequestBody PasswordDto passwordDto) {
        String result = userService.validatePasswordResetToken(passwordDto.getToken());

        if(result != null) {
            return new ResponseEntity<>("Neuspesna izmena", HttpStatus.BAD_REQUEST);
        }

        User user = userService.findUserByPasswordResetToken(passwordDto.getToken());
        if(user != null) {
            userService.changeUserPassword(user, passwordDto.getNewPassword());
            userService.deletePasswordResetToken(passwordDto.getToken());
            return new ResponseEntity<>("Uspesno izmenjena sifra", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Neuspesna izmena", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/update-password")
    public ResponseEntity<String> updatePassword(@RequestBody UpdatePasswordDTO updatePasswordDTO, HttpServletRequest request) {
        String username = tokenUtils.getUsernameFromToken(tokenUtils.getToken(request));
        String result = userService.updatePassword(updatePasswordDTO, username);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    private String getAppUrl(HttpServletRequest request) {
        return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    }

}
