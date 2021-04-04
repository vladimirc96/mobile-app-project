package com.project.mobileapi.ads;

import com.project.mobileapi.model.Ad;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface AdMapper {
    AdMapper INSTANCE = Mappers.getMapper(AdMapper.class);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "title", target = "title")
    @Mapping(source = "price", target = "price")
    @Mapping(source = "priceFixed", target = "priceFixed")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "creationDate", target = "creationDate")
    @Mapping(source = "views", target = "views")
    @Mapping(target = "subCategory", expression = "java(com.project.mobileapi.subcategory.SubCategoryMapper.INSTANCE.toModel(adDTO.getSubCategory()))")
    Ad toModel(AdDTO adDTO);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "title", target = "title")
    @Mapping(source = "price", target = "price")
    @Mapping(source = "priceFixed", target = "priceFixed")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "creationDate", target = "creationDate")
    @Mapping(source = "views", target = "views")
    @Mapping(target = "subCategory", expression = "java(com.project.mobileapi.subcategory.SubCategoryMapper.INSTANCE.toDto(ad.getSubCategory()))")
    AdDTO toDto(Ad ad);
}
