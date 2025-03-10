import React, { useEffect, useState } from "react";
import "./Axios_5.css";
import axios from "axios";

const Axios_5 = () => {
  const [person, setPerson] = useState([]);
  const [student, setStudent] = useState([]);

  //서버에서 사람목록 데이터 가져오기 함수
  const getPerson = () => {

      axios.get('/api/t4')
      .then((res) => {
        console.log(res.data);
        setPerson(res.data);
      })
      .catch((error) => {
        console.log('오류');
      });
   
  }
  
  //서버에서 학생목록 데이터 가져오기 함수
  const getStudent = () => {

      axios.get('/api/t5')
      .then((res) => {
        console.log(res.data);
        setStudent(res.data);
      })
      .catch((error) => {
        console.log('오류');
      });
  }
  
  
  

  return (
    <>
      <div>Axios_5</div>
      <table className="t1">
        <colgroup>
        <col width={'50%'} />
        <col width={'50%'} />
        </colgroup>
        <tbody>
          <tr className="t1-tr">
            <td>
              <button type="button" onClick={(e) => {getPerson();}}>버튼1 </button>
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
                    person.length === 0 ? 
                    <tr>
                      <td colSpan={3}>버튼1을 클릭하면 데이터가 조회됩니다.</td>
                    </tr> : 
                    person.map((personInfo, i) => {
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
            </td>
            <td>
              <button type="button" onClick={() => {getStudent();}}>버튼2</button>
              <table>
                <thead>
                  <tr>
                    <td>이름</td>
                    <td>국어점수</td>
                    <td>영어점수</td>
                    <td>수학점수</td>
                    <td>총점</td>
                  </tr>
                </thead>
                <tbody>
                  {
                  student.length === 0 ? 
                  <tr>
                    <td colSpan={5}>버튼2를 클릭 해주세요</td>
                  </tr>
                  :
                  student.map((studentInfo, i) => {
                    return(
                      <tr key={i}>
                        <td>{studentInfo.name}</td>
                        <td>{studentInfo.korScore}</td>
                        <td>{studentInfo.engScore}</td>
                        <td>{studentInfo.mathScore}</td>
                        <td>{studentInfo.korScore + studentInfo.engScore + studentInfo.mathScore}</td>
                      </tr>
                    )
                  })
                  }
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Axios_5;
