package com.project.mobileapi.exceptions.handlers;

import com.project.mobileapi.exceptions.ApiError;
import com.project.mobileapi.exceptions.ResourceNotFoundException;
import org.hibernate.HibernateException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


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

    private ResponseEntity<Object> buildResponseEntity(ApiError apiError) {
        return new ResponseEntity<>(apiError, apiError.getStatus());
    }
}
