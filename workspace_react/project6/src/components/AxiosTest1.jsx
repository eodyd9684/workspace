import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosTest1 = () => {
  //서버에서 넘어오는 데이터를 저장하기 위한 state 변수 생성
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get('/api/t4')
    .then((res) => {
      console.log(res);
      setInfo(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])
  

  return (
    <>
      <div>AxiosTest1</div>
      <table border={1}>
        <thead>
      <tr>
        <td>이름</td>
        <td>나이</td>
        <td>주소</td>
      </tr>
      </thead>
      <tbody>
      {
        info.map((personInfo,i) => {
          return(
          <tr key={i}>
            <td>{personInfo.name}</td>
            <td>{personInfo.age}</td>
            <td>{personInfo.addr}</td>
          </tr>

          )

        })
      }
      </tbody>
      </table>
    </>
  );
};

export default AxiosTest1;
