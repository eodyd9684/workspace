import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const MemberJoin = () => {
  //입력한 모든 정보를 저장할 state변수
  const [memberJoin, setMemberJoin] = useState({
    memId : '',
    memName : '',
    memPw : '',
    memTel : '',
    memIntro : '',
    pwConfirm : ''
  });

  const validateRegData = () => {
    let isValid = true;
    //데이터 유효성 검사(validation 처리)
    if(memberJoin.memId === ''){
      alert('ID는 필수 입력 입니다.');
      isValid = false;
    }
    if(memberJoin.memName === ''){
      alert('이름은 필수 입력 입니다.')
      isValid = false;
    }
    if(memberJoin.memPw !== memberJoin.pwConfirm){
      alert('입력한 비번을 확인하세요.')
      isValid = false;
    }

    return isValid;
  }

  //console.log(memberJoin);

  const nav = useNavigate();

  const submit = () => {
    //데이터 유효성 검사(validation 처리)
    if(!validateRegData()){
      return;
    }
    axios.post('/api/members', memberJoin)
  .then((res) => {
    console.log(res.data)
   setMemberJoin(res.data)
   if(res.data !== 1){
    alert('알 수 없는 이유로 오류가 발생했습니다.');
    return;
   }
    alert(`${memberJoin.memId}님 가입을 축하합니다`)
    nav('/');
   
  })
  .catch((error) => {
    console.log(error);
    console.log(memberJoin);
  })
  }

  const changeData = (e) => {
    setMemberJoin({...memberJoin,
      [e.target.name] : e.target.value
  })}


  return (
    <>
      <div>
        아이디 : <input type="text" name="memId" onChange={(e)=>{
          changeData(e);
        }}/>
      </div>
      <div>
        이름 : <input type="text" name="memName" onChange={(e)=>{
          changeData(e);
        }}/>
      </div>
      <div>
        비밀번호 : <input type="password" name="memPw" onChange={(e)=>{
          changeData(e);
        }}/>
      </div>
      <div>
        비밀번호 확인 : <input type="password" name='pwConfirm' onChange={(e)=>{
          changeData(e);
        }}/>
      </div>
      <div>
        연락처 : <input type="text" name="memTel" onChange={(e)=>{
          changeData(e);
        }}/>
      </div>
      <div>
        소개 : <input type="text" name="memIntro" onChange={(e)=>{
          changeData(e);
        }}/>
      </div>
      <button type="button" onClick={(e)=>{
        submit();
      }} >등록</button>
    </>
  );
}

export default MemberJoin
