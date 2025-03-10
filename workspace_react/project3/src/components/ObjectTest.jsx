import React, { useState } from "react";

const ObjectTest = () => {
  const [monitor, setmonitor] = useState({
    brand : 'samsung',
    price : 10000,
    color : 'black'
  });

  return (
    <>
      <div>ObjectTest</div>
      브랜드 : {monitor.brand} <br/>
      가격 : {monitor.price} <br/>
      색상 : {monitor.color} <br/>
      <button type = 'button' onClick={() => {
        //새로운 객체 생성
        // const copyMonitor = {...monitor};
        // copyMonitor.brand = 'Lg';
        // setmonitor(copyMonitor);

        setmonitor({
          ...monitor,
          brand : 'Lg'
        });
      }}>버튼</button>
    </>
  );
};

export default ObjectTest;
