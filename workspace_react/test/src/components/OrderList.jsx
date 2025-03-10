import axios from "axios";
import React, { useEffect, useState } from "react";

const OrderList = ({setInfo, setShow}) => {
  //서버에서 받아오는 게시글 목록 데이터를 저장할 state변수
  const[orderlist, setoderlist] = useState([]);
  
  useEffect(() =>{
    axios.get('/api/orders')
    .then((res) => {
      console.log(res.data);
      setoderlist(res.data);
    })
    .catch((error) => {
      console.log('에러입니다');
      console.log(error);
    });
  } ,[]);
  
  return (
    <>
      <table className="list-Oder">
        <thead >
          <tr className="lt">
            <td>No</td>
            <td>상품명</td>
            <td>상품가격</td>
            <td>수량</td>
            <td>총구매가격</td>
          </tr>
        </thead>
        <tbody>
          {
            orderlist.map((order, i) => {
              return(
          <tr className='dt' key={i} onClick={(e) => {
            setInfo(orderlist[i]);
           setShow(true);
           }}>
            <td><span>{orderlist.length - i}</span></td>
            <td>{order.list}</td>
            <td>{order.price}</td>
            <td>{order.cnt}</td>
            <td>{order.price * order.cnt}</td>
          </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
};

export default OrderList;
