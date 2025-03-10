import React from "react";
import styles from "./ItemDetail.module.css"
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ItemDetail = ({itemDetail, setItemDetail, cnt, setCnt}) => {
  const nav = useNavigate();

  const changeDetail = (e) => {
    setItemDetail({
      ...itemDetail,
      [e.target.name] : e.target.value
    })
  }

  const changeUpdate = () => {
    axios.put(`/api/shops/${itemDetail.itemNum}`, itemDetail)
    .then(res => {
      alert('수정완료')
      //게시글 목록을 다시 조회
      setCnt(cnt + 1);
    })
    .catch(error => console.log(error))
  }

  

  return (
    <>
      <h3>상품 상세정보</h3>
      <table className={styles.detail_table}>
        <tbody>
          <tr>
            <td>상품번호</td>
            <td>
              <input
                type="text"
                className="my-input wide"
                value={itemDetail.itemNum} readOnly={true}/>
            </td>
          </tr>
          <tr>
            <td>상품명</td>
            <td>
              <input
                type="text"
                className="my-input wide"
                value={itemDetail.itemName} name="itemName" onChange={e => {changeDetail(e)}}
              />
            </td>
          </tr>
          <tr>
            <td>상품가격</td>
            <td>
              <input
                type="text"
                className="my-input wide"
                value={itemDetail.itemPrice} name="itemPrice" onChange={e => {changeDetail(e)}}
              />
            </td>
          </tr>
          <tr>
            <td>판매자</td>
            <td>
              <input
                type="text"
                className="my-input wide"
                value={itemDetail.seller} readOnly={true}/>
            </td>
          </tr>
          <tr>
            <td>상품등록일</td>
            <td>
              <input
                type="text"
                className="my-input wide"
                value={itemDetail.regDate ? dayjs(itemDetail.regDate).format('YYYY-MM-DD HH:mm:ss') : null} readOnly={true}/>
            </td>
          </tr>
          <tr>
            <td>상품설명</td>
            <td>
              <textarea value={itemDetail.itemIntro} name="itemIntro" onChange={e => {changeDetail(e)}}></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button type="button" className="btn_small" onClick={(e) => {changeUpdate()}}>
          수정
        </button>
      </div>
    </>
  );
};

export default ItemDetail;
