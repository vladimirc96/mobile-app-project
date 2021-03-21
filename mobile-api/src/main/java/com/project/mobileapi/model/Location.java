package com.project.mobileapi.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

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

    @OneToMany(mappedBy = "location", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<User> user;

    public Location(Long id, String value) {
        this.id = id;
        this.cityPart = value;
    }
}
