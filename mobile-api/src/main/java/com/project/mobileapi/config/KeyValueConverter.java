package com.project.mobileapi.config;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.mobileapi.util.KeyValue;
import lombok.SneakyThrows;
import org.springframework.core.convert.converter.Converter;

public class KeyValueConverter implements Converter<String, KeyValue> {

    @SneakyThrows
    @Override
    public KeyValue convert(String s) {
        return new ObjectMapper().readValue(s, KeyValue.class);
    }

}
