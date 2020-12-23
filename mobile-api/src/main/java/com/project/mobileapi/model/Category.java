package com.project.mobileapi.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="table_categories")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "category_name")
    private String name;

    @ManyToMany(fetch = FetchType.EAGER,  cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "categories_subcategories",
            joinColumns = @JoinColumn(name = "category_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "subcategory_id", referencedColumnName = "id"))
    private List<SubCategory> subCategories;

}
