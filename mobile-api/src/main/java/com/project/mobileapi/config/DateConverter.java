package com.project.mobileapi.config;

import org.springframework.core.convert.converter.Converter;

import java.time.LocalDate;

public class DateConverter implements Converter<String, LocalDate> {
    @Override
    public LocalDate convert(String s) {
        return LocalDate.parse(s);
    }
}
