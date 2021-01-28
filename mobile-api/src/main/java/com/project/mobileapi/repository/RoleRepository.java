package com.project.mobileapi.repository;

import com.project.mobileapi.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Role findOneById(Long id);

}
