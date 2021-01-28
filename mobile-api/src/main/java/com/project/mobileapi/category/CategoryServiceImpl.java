package com.project.mobileapi.category;

import com.project.mobileapi.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class CategoryServiceImpl implements CategoryService{

    private final CategoryRepository categoryRepository;

    @Override
    public List<CategoryDTO> findAll() {
        return categoryRepository.findAll().stream().map(CategoryMapper.INSTANCE::toDto).collect(Collectors.toList());
    }
}
