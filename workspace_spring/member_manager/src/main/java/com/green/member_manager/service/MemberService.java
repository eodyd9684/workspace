package com.green.member_manager.service;

import com.green.member_manager.dto.MemberDTO;

import java.util.List;

public interface MemberService {
  //회원 목록 조회 기능
  public List<MemberDTO> selectMember();
  //정보 하나를 입력
  public void insertMember(MemberDTO memberDTO);
  //회원 상세 정보 조회 기능
  public MemberDTO getMemberList(String memId);
  //회원 정보 삭제 기능
  public void deleteMember(String memId);
  //회원 정보 수정 기능
  public void updateMember(MemberDTO memberDTO);
}
