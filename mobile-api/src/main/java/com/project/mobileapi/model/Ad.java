package com.project.mobileapi.model;

import com.project.mobileapi.util.Currency;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name="table_ads")
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Ad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "ad_price")
    private double price;

    @Enumerated(EnumType.STRING)
    private Currency currency;

    @Column(name = "agreement")
    private boolean agreement;

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

    @ManyToOne
    private User user;

}
