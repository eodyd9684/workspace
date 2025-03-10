import axios from "axios";
import React, { useEffect, useState } from "react";

const OrderList = () => {

  const [orderList, setOrderList] = useState([]);



  useEffect(() => {
    axios
      .get("/api/orders")
      .then((res) => {
        console.log(res.data);
        setOrderList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

 

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>상품명</td>
            <td>상품단가</td>
            <td>구매수량</td>
            <td>구매가격</td>
            <td>주문자</td>
            <td>주문일</td>
          </tr>
        </thead>
        <tbody>
          {orderList.map((list, i) => {
            return (
              <tr key={i}>
                <td>{orderList.length - i}</td>
                <td>{list.shopDTO.itemName}</td>
                <td>{list.shopDTO.itemPrice}</td>
                <td>{list.buyCnt}</td>
                <td>{list.buyPrice}</td>
                <td>{list.buyer}</td>
                <td>{list.buyDate}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {
          orderList.map((order, i) => {
            return (
              <tr key={i}>
                <td>총 주문금액</td>
                <td>{order.buyPrice}</td>
              </tr>
            );
          })}
        </tfoot>
      </table>
    </>
  );
};

export default OrderList;
