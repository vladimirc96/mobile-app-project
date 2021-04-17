package com.project.mobileapi.subcategory;

import com.project.mobileapi.util.ObjectUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/sub-categories")
public class SubCategoryController {

    private final SubCategoryService subCategoryService;

    @GetMapping
    public ResponseEntity<List<SubCategoryDTO>> findAll(){
        return new ResponseEntity(ObjectUtils.isEmpty(subCategoryService.findAll()), HttpStatus.OK);
    }

    @GetMapping("/get-by-category-id")
    public ResponseEntity<List<SubCategoryDTO>> getAllByCategoryId(@RequestParam("categoryId") Long categoryId){
        return new ResponseEntity(ObjectUtils.isEmpty(subCategoryService.findAllByCategoryId(categoryId)), HttpStatus.OK);
    }

}
