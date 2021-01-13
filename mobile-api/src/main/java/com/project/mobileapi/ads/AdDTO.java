package com.project.mobileapi.ads;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class AdDTO {

    private Long id;

    private String title;

    private double price;

    private boolean priceFixed;

    private String description;

    private Date creationDate;

    private int views;

    private boolean deleted;

}
