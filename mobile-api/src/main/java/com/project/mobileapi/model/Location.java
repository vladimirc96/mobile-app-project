package com.project.mobileapi.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="table_location")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "city_part")
    private String cityPart;

    @OneToOne
    private User user;

}
