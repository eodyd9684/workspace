import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const nav = useNavigate();
  //조회한 상품 목록을 저장할 변수
  const [itemList, setItemList] = useState([]);

  //입력한 정보를 저장하는 변수
  const [orderData, setOrderData] = useState({
    itemNum : '',
    price : '',
    buyer : '',
    buyCnt : 1
  });

  console.log(orderData);
  
  //상품 목록 조회
  useEffect(() => {
    axios.get('/api/shops')
    .then(res => {
      //console.log(res.data);
      setItemList(res.data);
    })
    .catch(error => console.log(error))
  }, []);
  
  const changeOrderData = (e) => {

    if(e.target.name === 'itemNum'){
      let itemPrice = 0;

      for(const item of itemList){
        if(item.itemNum == e.target.value){
         itemPrice = item.itemPrice;
        }
      }
      
      setOrderData({
        ...orderData,
        [e.target.name] : e.target.value,
        price : itemPrice
       //price : itemList.fins((e) => {return e.itemNum == e.target.value}).itemPrice
      })
    }

      else{
        setOrderData({
          ...orderData,
          [e.target.name] : e.target.value,
        })
      }
  }


  const insertOrder = () => {
    axios.post('/api/orders', orderData)
    .then(res => {
      nav('/order-list')
    })
    .catch(error => console.log(error))
  }
  

  return (

    <>
    <h3>상품 주문</h3>
      <table>
        <tbody>
          <tr>
            <td>주문상품</td>
            <td>
              <select name='itemNum' value={orderData.itemNum} onChange={e => {
                changeOrderData(e)
                //상품단가 input 태그의 value도 변경

                }}>
                <option value="">선택</option>
                {
                  itemList.map((item, i) => {
                   return(
                    <option key={i} value={item.itemNum}>{item.itemName}</option>
                   )
                  })
                }
              </select>
            </td>
          </tr>
          <tr>
            <td>상품단가</td>
            <td><input readOnly={true} type="text" name='price' value={orderData.price} onChange={e => {changeOrderData(e)}}/></td>
          </tr>
          <tr>
            <td>주문자</td>
            <td><input type="text" name='buyer' value={orderData.buyer} onChange={e => {changeOrderData(e)}}/></td>
          </tr>
          <tr>
            <td>주문 수량</td>
            <td><input type="number" name='buyCnt' value={orderData.buyCnt} onChange={e => {changeOrderData(e)}}/></td>
          </tr>
        </tbody>
      </table>
      <button type='button' className='btn btn-small' onClick={e => {insertOrder()}}>주문하기</button>
    </>
  )
}

export default Order