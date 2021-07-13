package com.project.mobileapi.model;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Table(name="table_users", uniqueConstraints = @UniqueConstraint(columnNames = {"username"}, name = "username_unique_constraint"))
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "entry_date")
    private LocalDate entryDate;

    @Column(name = "details")
    private String details;

    @Column(name = "image")
    @Lob
    private byte[] image;

    @Column(name = "cv")
    @Lob
    private byte[] cv;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Rating> ratings;

    @ManyToOne
    private Location location;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.EAGER)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "username"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
    protected List<Role> roles;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Ad> ads;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (!this.roles.isEmpty()) {
            Role r = roles.iterator().next();
            List<Privilege> privileges = new ArrayList<Privilege>();
            for (Privilege p : r.getPrivileges()) {
                privileges.add(p);
            }
            return privileges;
        }
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public String getFullName(){
        return firstName + " " + lastName;
    }

    public int getPositiveRatings() {
        if(ratings == null){
            return 0;
        }
        if(ratings.isEmpty()){
            return 0;
        }
        List<Rating> positives = ratings.stream().filter(rating -> rating.isPositive()).collect(Collectors.toList());
        return positives.size();
    }

    public int getNegativeRatings(){
        if(ratings == null){
            return 0;
        }
        if(ratings.isEmpty()){
            return 0;
        }
        List<Rating> negatives = ratings.stream().filter(rating -> !rating.isPositive()).collect(Collectors.toList());
        return negatives.size();
    }

}
