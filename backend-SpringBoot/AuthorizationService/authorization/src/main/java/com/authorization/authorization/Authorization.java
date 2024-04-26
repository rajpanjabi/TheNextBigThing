package com.authorization.authorization;

import java.util.Map;

public interface Authorization {
    QueryStatusResult signup(Map<String, String> signUpDetails);
    QueryStatusResult signIn(Map<String,String> signInDetails);
    QueryStatusResult passwordReset(Map<String,String> passwordResetDetails);
}
