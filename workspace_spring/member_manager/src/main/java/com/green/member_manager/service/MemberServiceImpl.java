package com.green.member_manager.service;

import com.green.member_manager.dto.MemberDTO;
import com.green.member_manager.mapper.MemberMapper;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.lang.reflect.Member;
import java.util.List;

//MemberServiceImpl memberServiceImpl = new MemberServiceImpl();
@Service
public class MemberServiceImpl implements MemberService{
private MemberMapper memberMapper;

@Autowired
public MemberServiceImpl(MemberMapper memberMapper){
  this.memberMapper = memberMapper;
}

  //회원 목록 조회 기능
  @Override
  public List<MemberDTO> selectMember() {
  //회원 목록 조회 쿼리 실행
    return memberMapper.selectMember();
  }

  @Override
  public void insertMember(MemberDTO memberDTO) {
    memberMapper.insertMember(memberDTO);
  }

  //회원 상세 정보 조회 기능
  @Override
  public MemberDTO getMemberList(String memId) {
    return memberMapper.getMemberList(memId);
  }
  //회원 정보 삭제 기능
  @Override
  public void deleteMember(String memId) {
  memberMapper.deleteMember(memId);
  }
  //회원 정보 수정 기능
  @Override
  public void updateMember(MemberDTO memberDTO) {
    memberMapper.updateMember(memberDTO);
  }

}
