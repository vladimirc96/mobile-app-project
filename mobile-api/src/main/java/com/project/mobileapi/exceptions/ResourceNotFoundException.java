package com.project.mobileapi.exceptions;

public class ResourceNotFoundException extends RuntimeException {

    public static final String RESOURCE_NOT_FOUND_MESSAGE = "Resurs nije pronadjen";

    public ResourceNotFoundException() {
        super();
    }

    public ResourceNotFoundException(final String message, final Throwable cause) {
        super(message, cause);
    }

    public ResourceNotFoundException(final String message) {
        super(message);
    }

    public ResourceNotFoundException(final Throwable cause) {
        super(cause);
    }

}
