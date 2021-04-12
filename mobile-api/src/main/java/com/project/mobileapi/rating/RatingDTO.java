package com.project.mobileapi.rating;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class RatingDTO {
    private Long id;
    private String comment;
    private String username;
    private boolean positive;
}
