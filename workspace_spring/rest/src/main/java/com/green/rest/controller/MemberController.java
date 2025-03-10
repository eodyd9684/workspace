package com.green.rest.controller;

import com.green.rest.dto.MemberDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

//객체 생성 + 관제탑 역할 부여
//-> 이 클래스는 모든 요청(url)을 받는 클래스
@RestController
@RequestMapping("/members")
@Slf4j
public class MemberController {

  @GetMapping("")
  public void getMemberList(){
    System.out.println("getMemberList() 메서드 실행");
  }

  //회원 등록 -> localhost:8080/members
  @PostMapping("")
  public void insertMember(@RequestBody MemberDTO boardDTO){
    System.out.println("insertMember() 메서드 실행");
    System.out.println(boardDTO.toString());
  }

  //회원 한 명을 조회하는 기능
  //rest -> localhost:8080/members
  //url에 {}로 표현되는 내용은 값을 받아올 때 사용
  @GetMapping("/{age}")
  public void getMember(@PathVariable("age") int a){
    System.out.println("getMember() 메서드 실행");
    System.out.println("age = " + a);
  }

  //rest -> localhost:8080/members/java/20
  @GetMapping("/{memId}/{memAge}")
  public void getMember2(@PathVariable("memId") String memId, @PathVariable("memAge") int memAge){
    System.out.println("memId = " + memId);
    System.out.println("memAge = " + memAge);
  }

  //회원 한명을 삭제하는 기능을 제공하는 REST API
  //(DELETE) localhost:8080/members/aaa
  @DeleteMapping("/{memId}")
  public void delMember(@PathVariable("memId") String memId){
    log.info("회원 한 명 삭제");
    log.info("memId = " + memId);
  }
  //회원 한 명의 이름과 나이를 변경하는 기능을 제공하는 REST API
  //(PUT) localhost:8080/members/aaa
  @PutMapping("/{memId}")
  public void updateMember(@PathVariable ("memId") String memId, @RequestBody MemberDTO memberDTO){
  log.info("회원 한 명의 정보 변경");
  log.info("memId = " + memId);
  log.info("memberDTO = " + memberDTO);
  }


}
