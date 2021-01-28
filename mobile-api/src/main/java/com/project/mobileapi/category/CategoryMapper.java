package com.project.mobileapi.category;

import com.project.mobileapi.model.Category;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface CategoryMapper {
    CategoryMapper INSTANCE = Mappers.getMapper(CategoryMapper.class);

    Category toModel(CategoryDTO categoryDTO);
    CategoryDTO toDto(Category category);
}
