package com.project.mobileapi.email;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.MessagingException;
import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/mail")
public class MailController {

    public final MailService mailService;

    @PostMapping(consumes = "multipart/form-data")
    public void sendMail(@Valid @ModelAttribute MailDTO mailDTO) throws MessagingException {
        mailService.send(mailDTO);
    }
}
