package com.project.mobileapi.rating;

import com.project.mobileapi.repository.RatingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RatingServiceImpl implements RatingService{
    private final RatingRepository ratingRepository;

    @Override
    public List<RatingDTO> getByUsername(String username) {
        return ratingRepository.findAllByUserUsername(username).stream().map(RatingMapper.INSTANCE::toDto).collect(Collectors.toList());
    }
}
