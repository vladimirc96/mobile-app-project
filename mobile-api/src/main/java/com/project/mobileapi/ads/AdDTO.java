package com.project.mobileapi.ads;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.mobileapi.subcategory.SubCategoryDTO;
import com.project.mobileapi.user.UserDTO;
import com.project.mobileapi.util.Currency;
import com.project.mobileapi.util.KeyValue;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

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

    private boolean agreement;

    @NotNull(message = "Opis oglasa ne sme da bude prazan.")
    @NotBlank(message = "Opis oglasa ne sme da bude prazan.")
    private String description;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate creationDate;

    private int views;

    @NotNull(message = "Morate izabrati potkategoriju kojoj pripada oglas.")
    private KeyValue subCategory;

    private Currency currency;

    private MultipartFile image;

    private UserDTO user;
}
