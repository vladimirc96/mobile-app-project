package com.project.mobileapi.ads;
import java.util.List;

public interface AdService {
    List<AdDTO> findAll();
    AdDTO save(AdDTO adDTO);
    AdDTO findOneById(Long adId);
}
