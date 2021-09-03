package com.project.mobileapi.email;

import com.project.mobileapi.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Locale;

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
        if(mail.getImage() != null){
            helper.addAttachment(mail.getImage().getOriginalFilename(), mail.getImage());
        }
        javaMailSender.send(message);
    }


    public void sendResetPasswordMail(String contextPath, Locale locale, String token, User user){
        javaMailSender.send(constructResetTokenEmail(contextPath, locale, token, user));
    }

    private SimpleMailMessage constructResetTokenEmail(String contextPath, Locale locale, String token, User user) {
        String url = contextPath + "/users/changePassword?token=" + token;
        String message = "Reset password";
        return constructEmail("Reset Password", message + " \r\n" + url, user);
    }

    private SimpleMailMessage constructEmail(String subject, String body,User user) {
        SimpleMailMessage email = new SimpleMailMessage();
        email.setSubject(subject);
        email.setText(body);
        email.setTo("cvetanovic9696@gmail.com");
        email.setFrom(environment.getProperty("spring.mail.username"));
        return email;
    }
}
