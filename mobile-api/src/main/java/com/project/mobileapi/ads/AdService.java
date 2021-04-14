package com.project.mobileapi.ads;
import com.project.mobileapi.user.UserDTO;

import java.io.IOException;
import java.util.List;

public interface AdService {
    List<AdDTO> findAll();
    AdDTO save(AdDTO adDTO) throws IOException;
    AdDTO findOneById(Long adId);
    List<AdDTO> findBySubCategoryId(Long subCategoryId);
}
