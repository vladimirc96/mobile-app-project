package com.project.mobileapi.model;

import com.project.mobileapi.user.UserDTO;
import com.project.mobileapi.util.KeyValue;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCrypt;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="table_users")
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User implements UserDetails {

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
    private LocalDate entryDate;

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

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.EAGER)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "username"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
    protected List<Role> roles;

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

    public static UserDTO toDto(User user) {
        return UserDTO.builder()
                .name(user.getName())
                .lastName(user.getLastName())
                .username(user.getUsername())
                .email(user.getEmail())
                .phoneNumber(user.getPhoneNumber())
                .location(new KeyValue(user.getLocation().getId(), user.getLocation().getCityPart())).build();
    }
}
