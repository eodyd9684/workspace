import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ShopDetail = () => {
  const {itemNum} = useParams();
  const nav = useNavigate();

  const [shopList, setShopList] = useState({});

  useEffect(() => {
    axios.get(`/api/shops/${itemNum}`)
    .then(res => {
      console.log(res.data);
      setShopList(res.data);
    })
    .catch(error => console.log(error))
  },[])

  const changeList = (e) => {
    setShopList({
      ...shopList,
      [e.target.name] : e.target.value
    })
  }

  const changeUpdate = () => {
  axios.put(`/api/shops/${shopList.itemNum}`, shopList)
  .then(res => {
    alert('수정완료')
    nav(`/detail/${itemNum}`)
  })
  .catch()
}
  

  return (
    <>
    <h3>상품 상세 정보</h3>
    <table>
      <tbody>
        <tr>
          <td>상품번호</td>
          <td><input type="text" name="itemNum" value={shopList.itemNum}  /></td>
          </tr>
          <tr>
          <td>상품명</td>
          <td><input type="text" name="itemName" value={shopList.itemName} onChange={e => {changeList(e)}}/></td>
          </tr>
          <tr>
          <td>상품가격</td>
          <td><input type="text" name="itemPrice" value={shopList.itemPrice} onChange={e => {changeList(e)}}/></td>
          </tr>
          <tr>
          <td>판매자</td>
          <td><input type="text" name="seller" value={shopList.seller} /></td>
          </tr>
          <tr>
          <td>상품등록일</td>
          <td><input type="text" name="regDate" value={shopList.regDate} /></td>
          </tr>
          <tr>
          <td>상품 설명</td>
          <td><textarea cols={30} rows={5} type="text" name="itemIntro" value={shopList.itemIntro} onChange={e => {changeList(e)}}></textarea></td>
          </tr>
      </tbody>
    </table>
    <button type="button" onClick={(e) => {changeUpdate()}}>수정</button>
    </>
  );
};

export default ShopDetail;
