package com.project.mobileapi.user;

import com.project.mobileapi.model.Location;
import com.project.mobileapi.model.User;
import com.project.mobileapi.util.KeyValue;

import java.util.stream.Collectors;

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
                .ratings(user.getRatings().isEmpty() && user.getRatings() != null ? user.getRatings().stream().map(RatingMapper.INSTANCE::toDto).collect(Collectors.toList()) : null)
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
                .ratings(userDTO.getRatings().isEmpty() && userDTO.getRatings() != null ? userDTO.getRatings().stream().map(RatingMapper.INSTANCE::toModel).collect(Collectors.toList()) : null)
                .build();
    }
}
