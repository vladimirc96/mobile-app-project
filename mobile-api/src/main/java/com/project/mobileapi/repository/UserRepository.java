package com.project.mobileapi.repository;

import com.project.mobileapi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

interface UserRepository extends JpaRepository<User, String> {
}
