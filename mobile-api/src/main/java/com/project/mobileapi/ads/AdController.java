package com.project.mobileapi.ads;

import com.project.mobileapi.model.User;
import com.project.mobileapi.security.TokenUtils;
import com.project.mobileapi.user.UserAdapter;
import com.project.mobileapi.user.UserDTO;
import com.project.mobileapi.user.UserService;
import com.project.mobileapi.util.ObjectUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/ads")
public class AdController {

    private final AdService adService;
    private final TokenUtils tokenUtils;
    private final UserService userService;

    @PostMapping(value = "", consumes = "multipart/form-data")
    @PreAuthorize("hasAuthority('POST_AD')")
    public ResponseEntity<AdDTO> save(@Valid @ModelAttribute AdDTO adDTO, HttpServletRequest request) throws IOException {
        String username = tokenUtils.getUsernameFromToken(tokenUtils.getToken(request));
        UserDTO user = userService.findOneByUsername(username);
        adDTO.setUser(user);
        AdDTO saved = adService.save(adDTO);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<AdDTO>> findAll(){
        return new ResponseEntity(ObjectUtils.isEmpty(adService.findAll()), HttpStatus.OK);
    }

    @GetMapping("/{adId}")
    public ResponseEntity<AdDTO> findOneById(@PathVariable("adId") Long adId){
        return new ResponseEntity<>(ObjectUtils.isEmpty(adService.findOneById(adId)), HttpStatus.OK);
    }

    @GetMapping("/get-by-subcategory-id")
    public ResponseEntity<List<AdDTO>> findBySubCategoryId(@RequestParam Long subCategoryId){
        return new ResponseEntity(ObjectUtils.isEmpty(adService.findBySubCategoryId(subCategoryId)), HttpStatus.OK);
    }

    @GetMapping("/get-by-username")
    public ResponseEntity<List<AdInfoDTO>> getByUsername(@RequestParam String username){
        return new ResponseEntity<>(adService.getByUsername(username), HttpStatus.OK);
    }

}
