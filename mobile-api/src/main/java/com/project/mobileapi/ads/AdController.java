package com.project.mobileapi.ads;

import com.project.mobileapi.exceptions.ResourceNotFoundException;
import com.project.mobileapi.util.ObjectUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/ads")
public class AdController {

    private final AdService adService;

    @PostMapping(value = "", consumes = "application/json", produces = "application/json")
    @PreAuthorize("hasAuthority('POST_AD')")
    public ResponseEntity<AdDTO> save(@RequestBody AdDTO adDTO){
        AdDTO saved = adService.save(adDTO);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<AdDTO>> findAll(){
        return new ResponseEntity<>((List<AdDTO>) ObjectUtils.isEmpty(adService.findAll()), HttpStatus.OK);
    }

    @GetMapping("/{adId}")
    public ResponseEntity<AdDTO> findOneById(@PathVariable("adId") Long adId){
        return new ResponseEntity<>(ObjectUtils.isEmpty(adService.findOneById(adId)), HttpStatus.OK);
    }

}
