package com.project.mobileapi.ads;

import com.project.mobileapi.model.Ad;
import com.project.mobileapi.subcategory.SubCategoryMapper;
import com.project.mobileapi.util.CustomMultipartFile;
import org.apache.tomcat.util.http.fileupload.FileUtils;

import java.io.IOException;

public class AdAdapter {

    public AdAdapter(){

    }

    public static AdDTO toDto(Ad ad){
        if(ad == null){
            return null;
        }

        return AdDTO.builder()
                .title(ad.getTitle())
                .price(ad.getPrice())
                .agreement(ad.isAgreement())
                .description(ad.getDescription())
                .creationDate(ad.getCreationDate())
                .views(ad.getViews())
                .subCategory(SubCategoryMapper.INSTANCE.toDto(ad.getSubCategory()))
                .currency(ad.getCurrency())
//                .image(new CustomMultipartFile(ad.getImage()))
                .build();
    }

    public static Ad toModel(AdDTO adDTO) throws IOException {
        if(adDTO == null){
            return null;
        }
        return Ad.builder()
                .id(adDTO.getId())
                .title(adDTO.getTitle())
                .price(adDTO.getPrice())
                .currency(adDTO.getCurrency())
                .agreement(adDTO.isAgreement())
                .description(adDTO.getDescription())
                .creationDate(adDTO.getCreationDate())
                .views(adDTO.getViews())
                .image(adDTO.getImage() != null ? adDTO.getImage().getBytes() : null)
                .subCategory(SubCategoryMapper.INSTANCE.toModel(adDTO.getSubCategory()))
                .build();
    }


}
