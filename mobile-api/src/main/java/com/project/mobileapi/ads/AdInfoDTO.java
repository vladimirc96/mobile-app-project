package com.project.mobileapi.ads;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.mobileapi.model.Currency;
import com.project.mobileapi.util.KeyValue;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class AdInfoDTO {
    private Long id;
    private String title;
    private double price;
    private boolean agreement;
    private String description;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.MM.yyyy")
    private LocalDate creationDate;
    private int views;
    private KeyValue subCategory;
    private Currency currency;
    private byte[] image;
}
