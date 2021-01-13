package com.project.mobileapi.user;

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
                .username(user.getUsername())
                .name(user.getName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .phoneNumber(user.getPhoneNumber())
                .details(user.getDetails())
                .location(new KeyValue(user.getLocation().getId(), user.getLocation().getCityPart()))
                .build();
    }

}
