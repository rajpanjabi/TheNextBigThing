package com.authorization.authorization;

public class QueryStatusResult {
    String message;
    Object object;
    QueryStatus status;

    QueryStatusResult(String message, QueryStatus status){
        this.message = message;
        this.status = status;
    }

    void setMessage(String message){
        this.message = message; 
    }

    void setObject(Object object){
        this.object=object;
    }

    void setStatus(QueryStatus status){
        this.status=status;
    }

    String getMessage(){
        return this.message; 
    }

    Object getObject(){
        return this.object;
    }

    QueryStatus getStatus(){
        return this.status;
    }
}
