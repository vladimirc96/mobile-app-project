package com.project.mobileapi.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="table_subcategories")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SubCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "subcategory_name")
    private String name;

    @ManyToMany(mappedBy = "subCategories", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<Category> categories;

    @OneToMany(mappedBy = "subCategory", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Ad> ads;
}
