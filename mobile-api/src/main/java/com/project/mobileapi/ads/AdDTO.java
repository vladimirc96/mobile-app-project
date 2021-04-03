package com.project.mobileapi.ads;

import com.project.mobileapi.subcategory.SubCategoryDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.Date;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class AdDTO {

    private Long id;

    @NotNull(message = "Naslov oglasa ne sme da bude prazan.")
    @NotBlank(message = "Naslov oglasa ne sme da bude prazan.")
    private String title;

    private double price;

    private boolean priceFixed;

    @NotNull(message = "Opis oglasa ne sme da bude prazan.")
    @NotBlank(message = "Opis oglasa ne sme da bude prazan.")
    private String description;

    private LocalDate creationDate;

    private int views;

    private MultipartFile image;

    private SubCategoryDTO subCategory;

}
