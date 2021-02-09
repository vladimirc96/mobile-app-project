package com.project.mobileapi.util;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.springframework.core.convert.converter.Converter;

public class KeyValueConverter implements Converter<String, KeyValue> {

    @SneakyThrows
    @Override
    public KeyValue convert(String s) {
        return new ObjectMapper().readValue(s, KeyValue.class);
    }

}
