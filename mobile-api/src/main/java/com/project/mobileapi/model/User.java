package com.project.mobileapi.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="table_users")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {

    @Id
    @Column(name = "username")
    private String username;

    @Column(name = "user_name")
    private String name;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "entry_date")
    private Date entryDate;

    @Column(name = "details")
    private String details;

    @Column(name = "image")
    @Lob
    private byte[] image;

    @Column(name = "cv")
    @Lob
    private byte[] cv;

    @Column(name = "rating")
    private double rating;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Location location;

}
