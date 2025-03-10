import React, { useState } from "react"

const Test6 = () => {
  
  const [num, setNum] = useState(0);
  
  const changeCount = (val) => {
    setNum(num + val);
  }
  
  return (
    <>
      <h2>Simple Counter</h2>
      <div>
        <p>현재 카운트 :</p>
        <h3>{num}</h3>
      </div>
      <div>
      <button type="button" onClick={(e) => {
        changeCount(-1);
      }}>-1</button>
      <button type="button" onClick={(e) => {
        changeCount(-10);
      }}>-10</button>
      <button type="button" onClick={(e) => {
        changeCount(-100);
      }}>-100</button>
      <button type="button" onClick={(e) => {
        changeCount(+100);
      }}>+100</button>
      <button type="button" onClick={(e) => {
        changeCount(+10);
      }}>+10</button>
      <button type="button" onClick={(e) => {
        changeCount(+1);
      }}>+1</button>
      </div>
    </>
  );
};

export default Test6;
