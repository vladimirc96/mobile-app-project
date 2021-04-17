package com.project.mobileapi.rating;

import java.util.List;

public interface RatingService {
    List<RatingDTO> getByUsername(String username);
    RatingDTO saveRating(RatingDTO ratingDTO);
}
