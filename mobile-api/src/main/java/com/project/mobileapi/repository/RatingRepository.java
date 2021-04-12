package com.project.mobileapi.repository;


import com.project.mobileapi.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RatingRepository extends JpaRepository<Rating, Long> {

    List<Rating> findAllByUserUsername(String username);

}
