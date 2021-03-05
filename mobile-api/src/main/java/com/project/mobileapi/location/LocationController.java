package com.project.mobileapi.location;

import com.project.mobileapi.util.KeyValue;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/location")
public class LocationController {

    private final LocationService locationService;


    @GetMapping
    public ResponseEntity<List<KeyValue>> getAll(){
        return new ResponseEntity<>(locationService.getAll(), HttpStatus.OK);
    }
}
