import React, { useState } from "react";
import './Test7.css'

const Test7 = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div>Test7</div>
      <div className="test7" 
      onMouseEnter={() => {
        setIsShow(true)
      }} 
      onMouseLeave={() => {
        setIsShow(false)
      }}>마우스 올리면 숨겨진 글자가 보여요</div>
      {
      isShow ? <div className="test7">Hello React</div> : null
      }
    </>
  );
};

export default Test7;
