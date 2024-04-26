package com.authorization.authorization;

import java.util.Map;

public class AuthorizationImpl implements Authorization{

    @Override
    public QueryStatusResult passwordReset(Map<String,String> passwordResetDetails) {
        return null;
    }

    @Override
    public QueryStatusResult signIn(Map<String,String> signInDetails) {
        return null;
    }

    @Override
    public QueryStatusResult signup(Map<String, String> signUpDetails) {
        return null;
    }
    
}
