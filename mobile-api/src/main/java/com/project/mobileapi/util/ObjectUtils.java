package com.project.mobileapi.util;


import com.project.mobileapi.exceptions.ResourceNotFoundException;

import java.util.Collection;

public abstract class ObjectUtils {

    public static <T> T isEmpty(final T ref){
        if(ref == null){
            throw new ResourceNotFoundException(ResourceNotFoundException.RESOURCE_NOT_FOUND_MESSAGE);
        }
        return ref;
    }

    public static <T> Collection<T> isEmpty(final Collection<T> collection){
        if(collection == null || collection.isEmpty()){
            throw new ResourceNotFoundException(ResourceNotFoundException.RESOURCE_NOT_FOUND_MESSAGE);
        }
        return collection;
    }

}
