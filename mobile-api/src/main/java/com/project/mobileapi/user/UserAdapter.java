package com.project.mobileapi.user;

import com.project.mobileapi.model.Location;
import com.project.mobileapi.model.User;
import com.project.mobileapi.util.KeyValue;

import java.io.IOException;


public class UserAdapter {

    public UserAdapter(){

    }

    public static UserDTO toDto(User user){
        if(user == null){
            return null;
        }
        return UserDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .password(user.getPassword())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .phoneNumber(user.getPhoneNumber())
                .details(user.getDetails())
                .location(user.getLocation() != null ? new KeyValue(user.getLocation().getId(), user.getLocation().getCityPart()) : new KeyValue(null, ""))
                .positiveRatings(user.getPositiveRatings())
                .negativeRatings(user.getNegativeRatings())
                .entryDate(user.getEntryDate())
                .imageBytes(user.getImage() != null ? user.getImage() : null)
                .build();
    }

    public static User toModel(UserDTO userDTO) throws IOException {
        if(userDTO == null){
            return null;
        }
        return User.builder()
                .id(userDTO.getId())
                .username(userDTO.getUsername())
                .password(userDTO.getPassword())
                .firstName(userDTO.getFirstName())
                .lastName(userDTO.getLastName())
                .email(userDTO.getEmail())
                .phoneNumber(userDTO.getPhoneNumber())
                .details(userDTO.getDetails())
                .location(userDTO.getLocation() != null ? new Location(userDTO.getLocation().getId(), userDTO.getLocation().getValue()) : null)
                .entryDate(userDTO.getEntryDate())
                .image(userDTO.getImageBytes() != null ? userDTO.getImageBytes() : userDTO.getImage() != null ? userDTO.getImage().getBytes() : null)
                .build();
    }
}
