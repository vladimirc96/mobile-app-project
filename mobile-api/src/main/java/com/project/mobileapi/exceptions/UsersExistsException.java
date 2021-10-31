package com.project.mobileapi.exceptions;

public class UsersExistsException extends RuntimeException{
    public static final String USER_EXISTS_MESSAGE = "Već postoji korisnik sa unešenim korisničkim imenom.";

    public UsersExistsException() {
        super();
    }

    public UsersExistsException(final String message, final Throwable cause) {
        super(message, cause);
    }

    public UsersExistsException(final String message) {
        super(message);
    }

    public UsersExistsException(final Throwable cause) {
        super(cause);
    }
}
