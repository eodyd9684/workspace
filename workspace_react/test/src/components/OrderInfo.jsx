import React, { useState } from "react";
import OrderDetail from "./OrderDetail";
import OrderList from "./OrderList";
import "./OrderInfo.css";

const OrderInfo = () => {
  //게시글 하나의 정보를 담을 state변수
  const[info, setInfo] = useState({});

  //상세정보가 보일지/ 안보일지 결정하는 state변수
  const[show, setShow] = useState(false);

  return (
    <>
    <div className="container"><h2>주문 목록</h2></div>
      <OrderList setInfo = {setInfo} setShow = {setShow} />
        {
          show ? <OrderDetail info = {info} /> : null
        }
    </>
  );
};

export default OrderInfo;
