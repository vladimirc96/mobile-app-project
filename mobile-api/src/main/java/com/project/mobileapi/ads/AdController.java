package com.project.mobileapi.ads;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<AdDTO> save(@RequestBody AdDTO adDTO){
        AdDTO saved = adService.save(adDTO);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<AdDTO>> findAll(){
        List<AdDTO> ads = adService.findAll();
        return new ResponseEntity<>(ads, HttpStatus.OK);
    }

    @GetMapping("/{adId}")
    public ResponseEntity<AdDTO> findOneById(@PathVariable("adId") Long adId){
        AdDTO ad = adService.findOneById(adId);
        return new ResponseEntity<>(ad, HttpStatus.OK);
    }

}
