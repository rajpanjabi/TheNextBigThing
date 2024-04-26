package com.authorization.authorization;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/authorization")
public class AuthorizationController{

    private AuthorizationImpl authorizationImpl;

    AuthorizationController(AuthorizationImpl authorizationImpl){
        this.authorizationImpl = authorizationImpl;
    }
    
    @PostMapping("/signUp")
    public ResponseEntity<Map<String,Object>> signUp(@RequestBody Map<String,String> signUpDetails){
        Map<String,Object> response = new HashMap<String,Object>();
        QueryStatusResult result = authorizationImpl.signup(signUpDetails);
        response.put("message",result.getMessage());
        response.put("data", result.getObject());
        return HttpStatusResponse.setResponseEntity(response);
    }

    @GetMapping("/signIn")
    public ResponseEntity<Map<String,Object>> signIn(@RequestBody Map<String,String> signInDetails){
        Map<String,Object> response = new HashMap<String,Object>();
        QueryStatusResult result = authorizationImpl.signIn(signInDetails);
        response.put("message",result.getMessage());
        return HttpStatusResponse.setResponseEntity(response);
    }

    @PutMapping("/passwordReset")
    public ResponseEntity<Map<String,Object>> passwordreset(@RequestBody Map<String,String> passwordResetDetails){
        Map<String,Object> response = new HashMap<String,Object>();
        QueryStatusResult result = authorizationImpl.passwordReset(passwordResetDetails);
        response.put("message",result.getMessage());
        response.put("data", result.getObject());
        return HttpStatusResponse.setResponseEntity(response);
    }
}