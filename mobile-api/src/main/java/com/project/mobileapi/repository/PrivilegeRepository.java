package com.project.mobileapi.repository;

import com.project.mobileapi.model.Privilege;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrivilegeRepository extends JpaRepository<Privilege, Long> {

    Privilege findOneById(Long id);

}
