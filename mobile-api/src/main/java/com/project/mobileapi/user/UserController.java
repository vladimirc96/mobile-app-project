package com.project.mobileapi.user;

import com.project.mobileapi.model.User;
import com.project.mobileapi.security.TokenUtils;
import com.project.mobileapi.util.ObjectUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;


@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/users")
public class UserController {

    private final UserService userService;
    private final TokenUtils tokenUtils;

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

}
