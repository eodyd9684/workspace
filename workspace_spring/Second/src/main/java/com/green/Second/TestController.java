package com.green.Second;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
  private MemberSerivce memberSerivce;

  @Autowired
  public TestController(MemberSerivce memberSerivce){
    this.memberSerivce = memberSerivce;
  }

  @GetMapping("/a")
  public void aaa(){
    System.out.println("aaa 메서드 실행");
    memberSerivce.aaa();
  }
}
