package com.project.mobileapi.email;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class MailDTO {
    @NotNull(message = "Naslov ne sme da bude prazan.")
    @NotBlank(message = "Naslov ne sme da bude prazan.")
    private String title;

    @NotNull(message = "Poruka ne sme da bude prazna.")
    @NotBlank(message = "Poruka ne sme da bude prazna.")
    private String message;

    private MultipartFile image;

    @NotNull(message = "Ime i prezime ne sme da bude prazno.")
    @NotBlank(message = "Ime i prezime ne sme da bude prazno.")
    private String senderName;

    @NotNull(message = "Email adresa ne sme da bude prazna.")
    @NotBlank(message = "Email adresa ne sme da bude prazna.")
    @Email(message = "Email adresa nije validna.")
    private String senderEmail;
}
