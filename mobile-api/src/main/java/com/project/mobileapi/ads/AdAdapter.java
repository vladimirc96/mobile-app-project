package com.project.mobileapi.ads;

import com.project.mobileapi.model.Ad;
import com.project.mobileapi.model.SubCategory;
import com.project.mobileapi.user.UserAdapter;
import com.project.mobileapi.util.KeyValue;

import java.io.IOException;

public class AdAdapter {

    public AdAdapter(){

    }

    public static AdDTO toDto(Ad ad){
        if(ad == null){
            return null;
        }

        return AdDTO.builder()
                .id(ad.getId())
                .title(ad.getTitle())
                .price(ad.getPrice())
                .agreement(ad.isAgreement())
                .description(ad.getDescription())
                .creationDate(ad.getCreationDate())
                .views(ad.getViews())
                .subCategory(new KeyValue(ad.getSubCategory().getId(), ad.getSubCategory().getName()))
                .currency(ad.getCurrency())
                .user(ad.getUser() != null ? UserAdapter.toDto(ad.getUser()) : null)
                .imageBytes(ad.getImage() != null ? ad.getImage() : null)
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
                .image(adDTO.getImageBytes() != null ? adDTO.getImageBytes() : adDTO.getImage() != null ? adDTO.getImage().getBytes() : null)
                .subCategory(new SubCategory(adDTO.getSubCategory().getId(), adDTO.getSubCategory().getValue()))
                .user(adDTO.getUser() != null ? UserAdapter.toModel(adDTO.getUser()) : null)
                .build();
    }


}
