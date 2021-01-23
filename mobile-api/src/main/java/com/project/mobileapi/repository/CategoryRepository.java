package com.project.mobileapi.repository;

import com.project.mobileapi.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    Category findOneById(Long id);
}
