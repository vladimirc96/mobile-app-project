package com.project.mobileapi.subcategory;

import java.util.List;

public interface SubCategoryService {

    List<SubCategoryDTO> findAll();
    List<SubCategoryDTO> findAllByCategoryId(Long categoryId);

}
