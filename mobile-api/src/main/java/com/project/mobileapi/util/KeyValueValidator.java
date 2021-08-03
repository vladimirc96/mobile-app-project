package com.project.mobileapi.util;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class KeyValueValidator implements
        ConstraintValidator<KeyValueConstraint, KeyValue> {


    @Override
    public void initialize(KeyValueConstraint constraintAnnotation) {

    }

    @Override
    public boolean isValid(KeyValue keyValue, ConstraintValidatorContext constraintValidatorContext) {
        return keyValue.getId() == null ? false : true;
    }
}
