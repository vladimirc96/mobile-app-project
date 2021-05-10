package com.project.mobileapi.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.springframework.core.convert.converter.Converter;

public class DoubleConverter implements Converter<String, Double> {

    @SneakyThrows
    @Override
    public Double convert(String s) {
        if(s.equals("null")){
            return Double.valueOf(0);
        }
        return new ObjectMapper().readValue(s, Double.class);
    }

}

