import React, { useState } from "react";
import styles from './ShopInsert.module.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ShopInsert = () => {
  const nav = useNavigate();

  //입력 데이터를 저장할 변수
  const [itemData, setItemData] = useState({
    itemName : '',
    itemPrice : '',
    seller : '',
    itemIntro : ''
  });

  const changeItemData = (e) => {
    setItemData({
      ...itemData,
      [e.target.name] : e.target.value
    })
  }

  //상품 등록 기능
  const regItem = () => {
    if(!(itemData.itemName && itemData.itemPrice)){
      alert('상품명과 가격은 필수 입력입니다')
      return;
    }

    axios.post('/api/shops', itemData)
    .then(res => {
      alert('상품 등록 완료')
      nav('/')
    })
    .catch(error => {console.log(error)})
  }

  return (
    <div className={styles.item_insert_container}>
      <h3>상품 등록</h3>
      <table className={styles.item_insert_table}>
        <colgroup>
        
        </colgroup>
        <tbody>
          <tr>
            <td>상품명</td>
            <td><input className="my-input wide" type="text" name="itemName" value={itemData.itemName} onChange={(e) => {
              changeItemData(e)
            }}/></td>
          </tr>
          <tr>
            <td>상품가격</td>
            <td><input className="my-input wide" type="text" name="itemPrice" value={itemData.itemPrice} onChange={(e) => {
              changeItemData(e)
            }}/></td>
          </tr>
          <tr>
            <td>판매자</td>
            <td><input className="my-input wide" type="text" name="seller" value={itemData.seller} onChange={(e) => {
              changeItemData(e)
            }}/></td>
          </tr>
          <tr>
            <td>상품 설명</td>
            <td><textarea name="itemIntro" value={itemData.itemIntro} onChange={e => changeItemData(e)}></textarea></td>
          </tr>
        </tbody>
      </table>
      <div className={styles.btn_div}>
        <button className="btn" type="button" onClick={e => regItem()}>등록</button>
      </div>
     
    </div>
  );
};

export default ShopInsert;
