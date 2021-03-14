package com.project.mobileapi.location;

import com.project.mobileapi.repository.LocationRepository;
import com.project.mobileapi.util.KeyValue;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class LocationServiceImpl implements LocationService {

    private final LocationRepository locationRepository;

    @Override
    public List<KeyValue> getAll() {
        return locationRepository.findAll().stream().map(LocationMapper.INSTANCE::toKeyValue).collect(Collectors.toList());
    }
}
