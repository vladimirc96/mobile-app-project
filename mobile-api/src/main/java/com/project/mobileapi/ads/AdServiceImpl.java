package com.project.mobileapi.ads;

import com.project.mobileapi.model.Ad;
import com.project.mobileapi.repository.AdRepository;
import com.project.mobileapi.user.UserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
public class AdServiceImpl implements AdService{

    private final AdRepository adRepository;
    private static final int PAGE_SIZE = 3;

    @Override
    public List<AdDTO> findAll() {
        List<Ad> ads = adRepository.findAll().stream().filter(ad -> !ad.isDeleted()).collect(Collectors.toList());
        return ads.stream().map(AdAdapter::toDto).collect(Collectors.toList());
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

    @Override
    public List<AdDTO> findAllByPage(int pageNumber) {
        Pageable page = PageRequest.of(pageNumber, PAGE_SIZE);
        Page<Ad> ads = adRepository.findAll(page);
        List<Ad> adsNotDeleted = ads.stream().filter(ad -> !ad.isDeleted()).collect(Collectors.toList());
        return adsNotDeleted.stream().map(AdAdapter::toDto).collect(Collectors.toList());
    }
}
