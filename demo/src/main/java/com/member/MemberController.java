package com.member;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dto.MemberLoginDTO;
import com.security.TokenInfo;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/members")
@CrossOrigin("*")
public class MemberController {
    /*
    fetch('http://localhost:8081/members/login',{
        method: 'POST',
        headers: {'Accept':'application/json','Content-Type':'application/json'},
        body: JSON.stringify({'memId': 'test123','memPass': 'test123'})
    }).then(r=>r.json()).then(result=>console.log(result));
     */
    
    private final MemberService memberService;
    
    @PostMapping("/login")
    public TokenInfo login(@RequestBody MemberLoginDTO memberLoginDTO) {

        String memberId = memberLoginDTO.getMemId();
        String password = memberLoginDTO.getMemPass();
        System.out.println(memberId);
        System.out.println(password);
        TokenInfo tokenInfo = memberService.login(memberId, password);
        return tokenInfo;
    }
    
    @PostMapping("/test")
    public String test(){
        return "success";
    }
}
