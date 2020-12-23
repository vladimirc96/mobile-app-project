package com.project.mobileapi.repository;

import com.project.mobileapi.model.Ad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdRepository extends JpaRepository<Ad, Long> {
}
