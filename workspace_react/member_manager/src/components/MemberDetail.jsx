import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MemberDetail = () => {
 const nav = useNavigate();

  //URL Parameter 데이터 받기. 객체타입
  const { memId } = useParams();

  //상세정보를 저장 할 state 변수
  const [memberInfo, setMemberInfo] = useState({});

  //상세정보 데이터 가져오기
  useEffect(() => {
    axios
      .get(`/api/members/${memId}`)
      .then((res) => {
        setMemberInfo(res.data);
      })
      .catch((error) => {console.log(error)});
  }, []);
  //회원 삭제 함수
  const deleteMember = () => {
    //confrim : 확인 -> true
    //confrim : 취소 -> false
   const result = confirm('정말 삭제 할까요?');
    if(!result){
      return;
    }
    alert(result);
    axios.delete(`/api/members/${memberInfo.memId}`)
    .then((res) => {
      alert('회원이 삭제 되었습니다.')
      nav('/');
    })
    .catch((error) => {console.log(error)})
  }

  return (
    <>
      <div>회원 상세 정보 페이지</div>
      <div>이름 : {memberInfo.memName}</div>
      <div>Id : {memberInfo.memId}</div>
      <div>pw : {memberInfo.memPw}</div>
      <div>연락처 : {memberInfo.memTel}</div>
      <div>가입일 : {memberInfo.joinDate}</div>
      <button type="button" onClick={(e) => {nav('/')}}>목록으로 가기</button>
      <button type="button" onClick={(e) => {nav(`/update/${memberInfo.memId}`)}}>회원 수정</button>
      <button type="button" onClick={(e) => {deleteMember()}}>회원 삭제</button>
    </>
  );
};

export default MemberDetail;
