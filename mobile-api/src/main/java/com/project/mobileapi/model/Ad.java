package com.project.mobileapi.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name="table_ads")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Ad {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "ad_price")
    private double price;

    @Column(name = "price_fixed")
    private boolean priceFixed;

    @Column(name = "ad_description")
    private String description;

    @Column(name = "creation_date")
    private LocalDate creationDate;

    @Column(name = "views")
    private int views;

    @Column(name = "deleted")
    private boolean deleted;

    @Column(name = "image")
    @Lob
    private byte[] image;

    @ManyToOne
    private SubCategory subCategory;
}
