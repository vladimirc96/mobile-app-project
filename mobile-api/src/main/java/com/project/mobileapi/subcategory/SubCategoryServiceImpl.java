package com.project.mobileapi.subcategory;

import com.project.mobileapi.category.CategoryService;
import com.project.mobileapi.model.Category;
import com.project.mobileapi.repository.SubCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class SubCategoryServiceImpl implements SubCategoryService{

    private final SubCategoryRepository subCategoryRepository;
    private final CategoryService categoryService;

    @Override
    public List<SubCategoryDTO> findAll() {
        return subCategoryRepository.findAll().stream().map(SubCategoryMapper.INSTANCE::toDto).collect(Collectors.toList());
    }

    @Override
    public List<SubCategoryDTO> findAllByCategoryId(Long categoryId) {
        Category category = categoryService.findOneById(categoryId);
        return categoryService.findOneById(categoryId).getSubCategories().stream().map(SubCategoryMapper.INSTANCE::toDto).collect(Collectors.toList());
    }
}
