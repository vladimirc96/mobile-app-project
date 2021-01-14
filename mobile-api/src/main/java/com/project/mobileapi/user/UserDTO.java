package com.project.mobileapi.user;

import com.project.mobileapi.util.KeyValue;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    @NotNull(message = "Korisničko ime ne sme da bude prazno.")
    @NotBlank(message = "Korisničko ime ne sme da bude prazno.")
    private String username;

    @NotNull(message = "Šifra ne sme da bude prazna.")
    @NotBlank(message = "Šifra ne sme da bude prazna.")
    private String password;

    private String name;

    private String lastName;

    @Email(message = "Email adresa nije validna.")
    @NotNull(message = "Email ne sme da bude prazan.")
    @NotBlank(message = "Email ne sme da bude prazan.")
    private String email;

    @NotNull(message = "Broj telefona ne sme da bude bude prazan.")
    @NotBlank(message = "Broj telefona ne sme da bude bude prazan.")
    private String phoneNumber;

    private String details;

    @NotNull(message = "Lokacija ne sme da bude prazna.")
    private KeyValue location;

}
