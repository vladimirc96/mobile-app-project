package com.project.mobileapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication( scanBasePackages = {"com.project"})
public class MobileApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(MobileApiApplication.class, args);
    }

}
