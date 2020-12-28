package com.project.mobileapi.user;

import com.project.mobileapi.util.KeyValue;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private String username;

    private String password;

    private String name;

    private String lastName;

    private String email;

    private String phoneNumber;

    private String details;

    private KeyValue location;

}
