package com.project.mobileapi.ads;

import com.project.mobileapi.model.Ad;
import com.project.mobileapi.repository.AdRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.core.codec.AbstractDataBufferDecoder;
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
        Ad ad = adRepository.save(AdAdapter.toModel(adDTO));
        return AdAdapter.toDto(ad);
    }

    @Override
    public AdDTO findOneById(Long adId) {
        return AdAdapter.toDto(adRepository.findOneById(adId));
    }

    @Override
    public List<AdDTO> findBySubCategoryId(Long subCategoryId) {
        return adRepository.findAllBySubCategoryId(subCategoryId).stream().map(AdAdapter::toDto).collect(Collectors.toList());
    }

    @Override
    public List<AdInfoDTO> getByUsername(String username) {
        return adRepository.findAllByUserUsername(username).stream().map(AdInfoAdapter::toDto).collect(Collectors.toList());
    }
}
