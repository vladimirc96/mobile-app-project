package com.project.mobileapi.rating;

import com.project.mobileapi.util.ObjectUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/ratings")
public class RatingController {

    private final RatingService ratingService;

    @GetMapping("/get-by-username")
    public ResponseEntity<List<RatingDTO>> getByUsername(@RequestParam String username){
        return new ResponseEntity(ObjectUtils.isEmpty(ratingService.getByUsername(username)), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<RatingDTO> saveRating(@RequestBody RatingDTO rating){
        return new ResponseEntity<>(ratingService.saveRating(rating), HttpStatus.CREATED);
    }

}
