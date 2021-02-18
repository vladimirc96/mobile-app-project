package com.project.mobileapi.category;

import com.project.mobileapi.model.Category;

import java.util.List;

public interface CategoryService {

    List<CategoryDTO> findAll();
    Category findOneById(Long id);
}
