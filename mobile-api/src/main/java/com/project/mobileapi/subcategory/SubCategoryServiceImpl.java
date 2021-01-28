package com.project.mobileapi.subcategory;

import com.project.mobileapi.repository.SubCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class SubCategoryServiceImpl implements SubCategoryService{

    private SubCategoryRepository subCategoryRepository;

    @Override
    public List<SubCategoryDTO> findAll() {
        return subCategoryRepository.findAll().stream().map(SubCategoryMapper.INSTANCE::toDto).collect(Collectors.toList());
    }
}
