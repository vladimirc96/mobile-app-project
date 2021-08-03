package com.project.mobileapi.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.springframework.core.convert.converter.Converter;

public class LongConverter implements Converter<String, Long> {

    @SneakyThrows
    @Override
    public Long convert(String s) {
        return new ObjectMapper().readValue(s, Long.class);
    }

}

