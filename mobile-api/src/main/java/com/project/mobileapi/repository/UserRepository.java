package com.project.mobileapi.repository;

import com.project.mobileapi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
    User findOneByUsername(String username);
    User findOneById(Long id);
}
