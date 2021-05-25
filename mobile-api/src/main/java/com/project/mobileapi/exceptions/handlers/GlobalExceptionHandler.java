package com.project.mobileapi.exceptions.handlers;

import com.project.mobileapi.exceptions.ApiError;
import com.project.mobileapi.exceptions.InvalidPasswordException;
import com.project.mobileapi.exceptions.ResourceNotFoundException;
import com.project.mobileapi.exceptions.UsersExistsException;
import org.hibernate.HibernateException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.mail.MessagingException;
import org.springframework.validation.BindException;


@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = { HibernateException.class })
    public ResponseEntity<Object> handleUnauthorizedException(HibernateException ex) {
        return buildResponseEntity(new ApiError(HttpStatus.BAD_REQUEST, "Database error", ex));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Object> handleValidationExceptions(MethodArgumentNotValidException ex) {
        StringBuilder builder = new StringBuilder();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String errorMessage = error.getDefaultMessage();
            builder.append(errorMessage);
        });
        return buildResponseEntity(new ApiError(HttpStatus.BAD_REQUEST, builder.toString(), ex));
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<Object> handleResourceNotFoundExceptions(ResourceNotFoundException ex){
        return buildResponseEntity(new ApiError(HttpStatus.NOT_FOUND, ex.getMessage(), ex));
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<Object> handleBadCredentialsException(BadCredentialsException ex){
        return buildResponseEntity(new ApiError(HttpStatus.BAD_REQUEST, "Pogrešno korisničko ime ili šifra", ex));
    }

    @ExceptionHandler(MessagingException.class)
    public ResponseEntity<Object> handleBadEmailException(MessagingException ex){
        return buildResponseEntity(new ApiError(HttpStatus.BAD_REQUEST, "Email nije moguće poslati.", ex));
    }

    @ExceptionHandler(InvalidPasswordException.class)
    public ResponseEntity<Object> handleInvalidPasswordException(InvalidPasswordException ex){
        return buildResponseEntity(new ApiError(HttpStatus.BAD_REQUEST, ex.getMessage(), ex));
    }

    @ExceptionHandler(BindException.class)
    public ResponseEntity<Object> handleBindException(BindException ex) {
        StringBuilder builder = new StringBuilder();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String errorMessage = error.getDefaultMessage();
            if(builder.indexOf(errorMessage) != -1){
                return;
            }
            builder.append(errorMessage);
        });
        return buildResponseEntity(new ApiError(HttpStatus.BAD_REQUEST, builder.toString(), ex));
    }

    @ExceptionHandler(UsersExistsException.class)
    public ResponseEntity<Object> handleUsersExistsException(UsersExistsException ex){
        return buildResponseEntity(new ApiError(HttpStatus.BAD_REQUEST, ex.getMessage(), ex));
    }

    private ResponseEntity<Object> buildResponseEntity(ApiError apiError) {
        return new ResponseEntity<>(apiError, apiError.getStatus());
    }

}
