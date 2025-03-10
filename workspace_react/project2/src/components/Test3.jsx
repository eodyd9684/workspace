import './Test3.css';
import React, { useState } from "react";

const Test3 = () => {
  
  const [num2, setNum2] = useState(true);
  const [btnText, setBtnText] = useState('광고닫기');

  return (
    <>
      <button type="button" onClick={() => {
        setNum2(!num2);
        setBtnText(btnText === '광고닫기' ? '광고보기' : '광고닫기');
      
      }}>{btnText}
      </button>
      
      {
      num2 ? <div className='banner'>오늘 구매하시면 30% SALE!!!</div> : null
      }
      
    </>
  );
};

export default Test3;
