import React, { useState } from 'react'

const Test_1 = () => {
 
  const[info, setInfo] = useState({
    name : '',
    num : '',
    email : '',
    subject : '국어'
  });

  //모든 input태그의 값이 변경될때 실행할 함수
  //input 태그에 입력한 정보를 inof에 저장하는 기능
  const changeInfo = (e) =>{
    setInfo({
      ...info,
      [e.target.name] : e.target.value
    })
  }

  return (
    <>
      이름 <input name='name' type="text" value={info.name} onChange={(e) => {
        changeInfo(e);
      }}/> <br />
      연락처 <input name='age' type="text" value={info.num} onChange={(e) => {
        changeInfo(e);
      }} /> <br />
      이메일 <input name='email' type="text" value={info.email} onChange={(e) => {
        changeInfo(e);
      }}/> <br />
      희망과목 <select name='subject' value={info.subject} onChange={(e) => {
        changeInfo(e);
      }}>
        <option value='국어'>국어</option>
        <option value='영어'>영어</option>
        <option value='수학'>수학</option>
      </select>
      <div>
        이름 - {info.name}
      </div>
      <div>
        연락처 -{info.num}
      </div>
      <div>
        이메일 -{info.email}
      </div>
      <div>
        희망과목 -{info.subject}
      </div>
    </>
  )
}

export default Test_1