import axios from "axios";
import React, { useState } from "react";

export const Axios_8 = () => {
  const[foodlist, setFoodlist] = useState({
    food : '',
    count : 1,
    add : '토핑',
    want : '',
    date : ''
  });

    console.log(foodlist);

  //모든 입력값이 변경될때마다 실행시킬 함수
  const changeFoodList = (e) => {
    //foodlist state 변경의 변경 => setFoodlist();
    setFoodlist({
      ...foodlist,
      [e.target.name] : e.target.value
    });
  }

  //전송 버튼 클릭 시 서버로 데이터를 보내는 기능의 함수
  const sendData = () => {
    axios.post('/api/t9', foodlist)
      .then((res) =>{
        alert('서버로 데이터를 전송했습니다')
      })
      .catch((error) => {
        alert('서버로 데이터 전송 실패했습니다')
      });
  }
 
  return (
    <>
      <div>Axios_8</div>
      <div>음식 선택
        <select name="food" value={changeFoodList.food} onChange={(e) => {
          changeFoodList(e)
        }}>
        <option value={""} >선택</option>
        <option value={"치킨"}>치킨</option>
        <option value={"피자"}>피자</option>
        <option value={"족발"}>족발</option>
        </select>
        </div>
      <div>수량<input name="count" type="number" value={foodlist.count} onChange={(e) => {
        changeFoodList(e)
      }}/></div>
      <div>추가선택 
        <input name="add" type="radio" value={'토핑'} checked={'토핑' === foodlist.add} onChange={(e) => {
          changeFoodList(e)
        }} />토핑추가
        <input name="add" type="radio" value={'음료'} checked={'음료' ===foodlist.add} onChange={(e) => {
          changeFoodList(e)
        }}/>음료추가
        <input name="add" type="radio" value={'공기밥'} checked={'공기밥' ===foodlist.add} onChange={(e) => {
          changeFoodList(e)
        }}/>공기밥추가
        </div>
      <div>요청사항 <input name="want" type="textarea" value={foodlist.want} onChange={(e) => {
        changeFoodList(e)
        }} /></div>
      <div>주문일시 <input name="date" type="date" value={foodlist.date} onChange={(e) => {
        changeFoodList(e)
      }} /></div>
      <button type="button" value={"전송"} onClick={(e) => {
        sendData();
      }} >전송</button>
    </>
  );
};
