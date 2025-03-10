package com.green.member_manager.controllor;

import com.green.member_manager.dto.MemberDTO;
import com.green.member_manager.mapper.MemberMapper;
import com.green.member_manager.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j //log사용가능
@RestController
@RequestMapping("/members")
public class MemberControllor {
  private MemberService memberService;

  @Autowired
  public MemberControllor(MemberService memberService){
    this.memberService = memberService;
  }

  //회원 목록 조회 rest api
  @GetMapping("")
  public List<MemberDTO> getMember(){
  //회원 목록 조회
  return memberService.selectMember();
  }
  //회원 등록 조회 rest api
  @PostMapping("")
  public void insertMember(@RequestBody MemberDTO memberDTO){

    memberService.insertMember(memberDTO);
  }

  //회원 상세 정보 조회 rest api
  @GetMapping("/{memId}")
  public MemberDTO getMemberList(@PathVariable("memId") String memId){

    return memberService.getMemberList(memId);
  }

  //회원 정보 삭제 rest api
  @DeleteMapping("/{memId}")
  public void deleteMember(@PathVariable("memId") String memId){
    memberService.deleteMember(memId);
  }
  //회원 정보 수정 rest api
  @PutMapping("/{memId}")
  public void updateMember(@PathVariable("memId") String memId, @RequestBody MemberDTO memberDTO){
    memberDTO.setMemId(memId);
    memberService.updateMember(memberDTO);
  }
}
