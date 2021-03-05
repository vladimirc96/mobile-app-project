package com.project.mobileapi.location;

import com.project.mobileapi.model.Location;
import com.project.mobileapi.util.KeyValue;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface LocationMapper {
    LocationMapper INSTANCE = Mappers.getMapper(LocationMapper.class);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "value", target = "cityPart")
    Location toModel(KeyValue keyValue);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "cityPart", target = "value")
    KeyValue toKeyValue(Location location);
}
