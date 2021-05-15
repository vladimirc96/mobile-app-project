package com.project.mobileapi.ads;

import com.project.mobileapi.model.Ad;
import com.project.mobileapi.repository.AdRepository;
import com.project.mobileapi.user.UserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
public class AdServiceImpl implements AdService{

    private final AdRepository adRepository;

    @Override
    public List<AdDTO> findAll() {
        return adRepository.findAll().stream().map(AdAdapter::toDto).collect(Collectors.toList());
    }

    @Override
    public AdDTO save(AdDTO adDTO) throws IOException {
        if(adDTO.getId() != null){
            Ad ad = adRepository.findOneById(adDTO.getId());
            if(ad.getImage() != null && adDTO.getImage() == null){
                adDTO.setImageBytes(ad.getImage());
            }
        }
        Ad ad = adRepository.save(AdAdapter.toModel(adDTO));
        return AdAdapter.toDto(ad);
    }

    @Override
    public AdDTO findOneById(Long adId) {
        return AdAdapter.toDto(adRepository.findOneById(adId));
    }

    @Override
    public List<AdDTO> findBySubCategoryId(Long subCategoryId) {
        List<Ad> ads = adRepository.findAllBySubCategoryId(subCategoryId).stream().filter(ad -> !ad.isDeleted()).collect(Collectors.toList());
        return ads.stream().map(AdAdapter::toDto).collect(Collectors.toList());
    }

    @Override
    public List<AdInfoDTO> getByUsername(String username) {
        List<Ad> ads = adRepository.findAllByUserUsername(username).stream().filter(ad -> !ad.isDeleted()).collect(Collectors.toList());
        return ads.stream().map(AdInfoAdapter::toDto).collect(Collectors.toList());
    }

    @Override
    public void deleteById(Long id) {
        Ad ad = adRepository.findOneById(id);
        ad.setDeleted(true);
        adRepository.save(ad);
    }
}
