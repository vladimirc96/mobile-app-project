package com.project.mobileapi.ads;

import com.project.mobileapi.model.Ad;
import com.project.mobileapi.util.KeyValue;


public class AdInfoAdapter {

    public AdInfoAdapter(){

    }

    public static AdInfoDTO toDto(Ad ad){
        if(ad == null){
            return null;
        }

        return AdInfoDTO.builder()
                .id(ad.getId())
                .title(ad.getTitle())
                .price(ad.getPrice())
                .agreement(ad.isAgreement())
                .description(ad.getDescription())
                .creationDate(ad.getCreationDate())
                .views(ad.getViews())
                .subCategory(new KeyValue(ad.getSubCategory().getId(), ad.getSubCategory().getName()))
                .currency(ad.getCurrency())
                .imageBytes(ad.getImage() != null ? ad.getImage() : null)
                .build();
    }
}
