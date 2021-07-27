package com.project.mobileapi.model;

public enum Currency {
    RSD("RSD"),
    EUR("EUR");

    final String value;

    Currency(String val) {
        this.value = val;
    }
}
