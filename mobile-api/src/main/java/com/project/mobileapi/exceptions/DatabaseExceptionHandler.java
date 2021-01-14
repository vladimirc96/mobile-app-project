package com.project.mobileapi.exceptions;

import org.hibernate.HibernateException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class DatabaseExceptionHandler {

    @ExceptionHandler(value = { HibernateException.class })
    public ResponseEntity<Object> handleUnauthorizedException(HibernateException ex) {
        return buildResponseEntity(new ApiError(HttpStatus.BAD_REQUEST, "error", ex));
    }
    private ResponseEntity<Object> buildResponseEntity(ApiError apiError) {
        return new ResponseEntity<>(apiError, apiError.getStatus());
    }

}
