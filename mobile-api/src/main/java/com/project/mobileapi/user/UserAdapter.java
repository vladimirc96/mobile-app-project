package com.project.mobileapi.user;

import com.project.mobileapi.model.Location;
import com.project.mobileapi.model.User;
import com.project.mobileapi.util.KeyValue;


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
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .phoneNumber(user.getPhoneNumber())
                .details(user.getDetails())
                .location(user.getLocation() != null ? new KeyValue(user.getLocation().getId(), user.getLocation().getCityPart()) : null)
                .positiveRatings(user.getPositiveRatings())
                .negativeRatings(user.getNegativeRatings())
                .build();
    }

    public static User toModel(UserDTO userDTO){
        if(userDTO == null){
            return null;
        }
        return User.builder()
                .id(userDTO.getId())
                .username(userDTO.getUsername())
                .firstName(userDTO.getFirstName())
                .lastName(userDTO.getLastName())
                .email(userDTO.getEmail())
                .phoneNumber(userDTO.getPhoneNumber())
                .details(userDTO.getDetails())
                .location(new Location(userDTO.getLocation().getId(), userDTO.getLocation().getValue()))
                .build();
    }
}
