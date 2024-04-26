package com.authorization.authorization;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class HttpStatusResponse{
    public static ResponseEntity<Map<String,Object>> setResponseEntity(Map<String,Object> response){
        HttpStatus status = HttpStatus.PROCESSING;
        Object responseStatus = response.get("queryStatus");
        if(responseStatus == QueryStatus.SUCCESS)
        status = HttpStatus.OK;
        else if(responseStatus == QueryStatus.USER_NOT_FOUND)
        status = HttpStatus.NOT_FOUND;
        else if(responseStatus == QueryStatus.INVALID_INPUT)
        status = HttpStatus.NOT_ACCEPTABLE;
        else if(responseStatus == QueryStatus.ERROR)
        status = HttpStatus.INTERNAL_SERVER_ERROR;
        else
        status = HttpStatus.SERVICE_UNAVAILABLE;
        response.put("HttpStatus",status);
        return ResponseEntity.status(status).body(response);
    }
}