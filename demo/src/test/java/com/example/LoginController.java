package com.example;

import org.springframework.web.bind.annotation.GetMapping;

public class LoginController {
    
    @GetMapping("login")
    public String login() {
        return "굿";
    }
}
