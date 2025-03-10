import React, { useState } from 'react'

const RadioTest = () => {
  const[personInfo, setPersonInfo] = useState({
    name : '',
    email : '',
    password : '',
    subject : '',
    gender : '남자',
    myself : ''
  });

    const changePersonInfo = (e) => {
      setPersonInfo({
        ...personInfo,
        [e.target.name] : e.target.value
    })
    
  }

  return (
    <>
      이름 
      <input name='name' type="text" value={personInfo.name} onChange={(e) => {
        changePersonInfo(e);
      }} /> <br />

      이메일 
      <input name='email' type="text" value={personInfo.email} onChange={(e) => {
        changePersonInfo(e);
      }} /> <br />

      비밀번호 
      <input name='password' type="password" value={personInfo.password} onChange={(e) => {
        changePersonInfo(e);
      }} /> <br />

      학과 
      <select name='subject' value={personInfo.subject} onChange={(e) => {
        changePersonInfo(e);
      }}>
        <option value=''>학과를 선택하세요</option>
        <option value='화학'>화학</option>
        <option value='전기'>전기</option>
        <option value='기계'>기계</option>
        <option value='컴공'>컴공</option>
      </select> <br />

      성별 
      <input type="radio" name='a' value='남자' checked={personInfo.gender === '남자'} onChange={(e) => {
        changePersonInfo(e);
      }} /> 남자
      <input type="radio" name='a' value='여자' checked={personInfo.gender === '여자'} onChange={(e)=> {
        changePersonInfo(e);
      }} /> 여자
      <br />

      자기소개 <textarea cols='50' rows='5' name='myself' value={personInfo.myself} onChange={(e) => {changePersonInfo(e)}}></textarea>
      <br />

      <p>
        이름 {personInfo.name} <br />
        이메일 {personInfo.email} <br />
        비밀번호 {personInfo.password} <br />
        학과 {personInfo.subject} <br />
        성별 {personInfo.gender} <br />
        자기소개 {personInfo.myself}
      </p>
    </>
  )
}

export default RadioTest