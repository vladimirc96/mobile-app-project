package com.project.mobileapi.ads;

import com.project.mobileapi.model.Ad;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface AdMapper {
    AdMapper INSTANCE = Mappers.getMapper(AdMapper.class);

    Ad toModel(AdDTO adDTO);
    AdDTO toDto(Ad ad);
}
