package com.project.mobileapi.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.Collection;

@Entity
@Table(name="table_privileges")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Privilege implements GrantedAuthority {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;

    @ManyToMany(mappedBy = "privileges", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private Collection<Role> roles;

    @Override
    public String getAuthority() {
        return name;
    }
}