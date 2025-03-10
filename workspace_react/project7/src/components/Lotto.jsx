import axios from "axios";
import React, { useState } from "react";
import "./Lotto.css";
import LottoNum from "./LottoNum";

const Lotto = () => {
  //로또의 번호를 저장하는 state 변수
  const [lotto, setLotto] = useState([0, 0, 0, 0, 0, 0]);
  
  return (
    <>
      <h2>로또번호생성기기</h2>
      <div className="lotto">
        {
          lotto.map((num, i) => {
            return (
             <LottoNum num = {num} 
             lotto = {lotto} 
             setLotto = {setLotto}
             i = {i}
             key={i}/>
            )
          }
        )}

       
      </div>
    </>
  );
};

export default Lotto;
