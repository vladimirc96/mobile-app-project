package com.project.mobileapi.ads;

import com.project.mobileapi.model.Ad;
import com.project.mobileapi.repository.AdRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
public class AdServiceImpl implements AdService{

    private final AdRepository adRepository;

    @Override
    public List<AdDTO> findAll() {
        List<Ad> ads = adRepository.findAll();
        List<AdDTO> adsDtoList = ads.stream().map(AdMapper.INSTANCE::toDto).collect(Collectors.toList());
        return adsDtoList;
    }

    @Override
    public AdDTO save(AdDTO adDTO) {
        Ad ad = adRepository.save(AdMapper.INSTANCE.toModel(adDTO));
        return AdMapper.INSTANCE.toDto(ad);
    }

    @Override
    public AdDTO findOneById(Long adId) {
        return AdMapper.INSTANCE.toDto(adRepository.findOneById(adId));
    }
}
