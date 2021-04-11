package com.project.mobileapi.repository;

import com.project.mobileapi.model.Ad;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdRepository extends JpaRepository<Ad, Long> {
    Ad findOneById(Long id);
    List<Ad> findAllBySubCategoryId(Long subCategoryId);
}
