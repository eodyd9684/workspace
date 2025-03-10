import axios from "axios";
import React, { useEffect, useState } from "react";

const Axios_1 = () => {
  //서버에서 받은 데이터를 저장할 state 변수
  const[num, setNum] =useState(0);

  //마운트 될때만 서버에서 데이터를 받기 위해 useEffect 사용
  useEffect(() => {}, []);
  //서버에서 데이터 받기
  //get 안에는 데이터를 요청할 url을 작성
  axios.get('/api/t2')
  //통신 성공 후 실행내용 작성
  //res는 통신 성공에 대한 모든 정보가 담겨있는 객체
  .then((res) => {
    //통신 성공 시 num 변수에 서버에서 받아온 데이터를 저장!
    setNum(res.data);
  })
  //통신 실패 시 실행내용 작성
  //error는 통신 실패에 대한 모든 정보가 담겨있는 객체
  .catch((error) => {
    
  });

  return (
    <>
      <h3>Axios_1</h3>
      <p>받은 데이터{num}</p>
    </>
  );
};

export default Axios_1;
