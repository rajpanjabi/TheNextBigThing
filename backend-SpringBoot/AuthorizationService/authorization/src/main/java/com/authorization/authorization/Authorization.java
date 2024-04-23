package com.authorization.authorization;

public interface Authorization {
    QueryStatusResult signup();
    QueryStatusResult signIn();
    QueryStatusResult passwordReset();
}
