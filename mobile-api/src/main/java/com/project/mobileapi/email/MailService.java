package com.project.mobileapi.email;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@RequiredArgsConstructor
@Service
public class MailService {

    private final JavaMailSender javaMailSender;
    private final Environment environment;

    public void send(MailDTO mail) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();

        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        StringBuilder content = new StringBuilder();
        content.append("Ime i prezime: " + mail.getSenderName() + "\n");
        content.append("Email: " + mail.getSenderEmail() + "\n");
        helper.setFrom(mail.getSenderEmail());
        helper.setTo(environment.getProperty("spring.mail.username"));
        helper.setSubject(mail.getTitle());
        helper.setText(String.valueOf(content.append(mail.getMessage())));
        helper.addAttachment(mail.getImage().getOriginalFilename(), mail.getImage());

        javaMailSender.send(message);
    }
}
