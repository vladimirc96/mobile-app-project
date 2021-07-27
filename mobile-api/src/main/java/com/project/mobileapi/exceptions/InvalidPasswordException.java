package com.project.mobileapi.exceptions;

public class InvalidPasswordException extends RuntimeException{
    public static final String INVALID_PASSWORD_MESSAGE = "Šifra nije validna";

    public InvalidPasswordException() {
        super();
    }

    public InvalidPasswordException(final String message, final Throwable cause) {
        super(message, cause);
    }

    public InvalidPasswordException(final String message) {
        super(message);
    }

    public InvalidPasswordException(final Throwable cause) {
        super(cause);
    }
}
