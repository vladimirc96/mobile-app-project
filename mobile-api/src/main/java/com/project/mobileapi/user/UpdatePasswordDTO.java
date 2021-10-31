package com.project.mobileapi.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class UpdatePasswordDTO {

    private String oldPassword;
    private  String newPassword;
    private String confirmPassword;

}
