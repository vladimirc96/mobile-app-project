package com.project.mobileapi.rating;

import com.project.mobileapi.model.Rating;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface RatingMapper {
    RatingMapper INSTANCE = Mappers.getMapper(RatingMapper.class);

    Rating toModel(RatingDTO ratingDTO);
    RatingDTO toDto(Rating rating);
}
