import axios from "axios";
import React, { useEffect, useState } from "react";

const Axios_2 = () => {
  //서버에서 받은 데이터를 저장할 state 변수
  const [person, setPerson] = useState({});


  //마운트 될때만 서버에서 데이터를 받기 위해 useEffect 사용
  useEffect(() => {
    axios.get('/api/t3')
    .then((res) => {
      setPerson(res.data);
      console.log(res.data);
    })
    .catch((error) => {
      console.log('통신 중 오류 발생~');
      console.log(error);
    })
  }, [])

  

  return (
    <>
      <div>Axios_2</div>
      <p>이름 : {person.name}</p>
      <p>나이 : {person.age}</p>
      <p>주소 : {person.addr}</p>
      <button type="button">데이터 받기</button>
    </>
  );
};

export default Axios_2;
