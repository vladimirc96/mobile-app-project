package com.project.mobileapi.subcategory;

import com.project.mobileapi.model.SubCategory;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface SubCategoryMapper {

    SubCategoryMapper INSTANCE = Mappers.getMapper(SubCategoryMapper.class);

    SubCategory toModel(SubCategoryDTO subCategoryDTO);
    SubCategoryDTO toDto(SubCategory subCategory);
}
