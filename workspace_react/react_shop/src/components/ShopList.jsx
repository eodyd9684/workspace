import axios from "axios";
import React, { useEffect, useState } from "react";
import ShopDetail from "./ShopDetail";
import { Link } from "react-router-dom";
import styles from "./ShopList.module.css";
import dayjs from "dayjs";
import ItemDetail from "./ItemDetail";
import Order from "./Order";

const ShopList = () => {
  //조회한 상품 목록 데이터를 저장할 state 변수
  const [itemList, setItemList] = useState([]);

  //상세 정보 조회 데이터를 저장할 state 변수
  const [itemDetail, setItemDetail] = useState(null);

  const [cnt, setCnt] = useState(0);
  
  //상세 정보 내용 보이기/안보이기 변수
  //const [isShow, setIsShow] = useState(false);

  //상품 목록조회
  useEffect(() => {
    axios
      .get("/api/shops")
      .then((res) => {
        console.log(res.data);
        setItemList(res.data);
      })
      .catch((error) => console.log(error));
  }, [cnt]);

  //상품명 클릭 시 상세 정보 조회 함수
  const getDetail = (itemNum) => {
    axios.get(`/api/shops/${itemNum}`)
    .then(res => {
      setItemDetail(res.data);
      //setIsShow(true);
    })
    .catch(error => console.log(error))
  }

  const changeInsert = (e) => {
    setItemDetail({
      ...ItemDetail,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div className={styles.item_info_container}>
      <div className={styles.list_div}>
        <h1>상품 목록</h1>
        <table className={styles.list_table}>
          <colgroup>
            <col width={""} />
            <col width={""} />
            <col width={""} />
            <col width={""} />
          </colgroup>

          <thead>
            <tr>
              <td>No</td>
              <td>상품명</td>
              <td>상품가격</td>
              <td>판매자</td>
            </tr>
          </thead>
          <tbody>
            {itemList.map((list, i) => {
              return (
                <tr key={i}>
                  <td>{itemList.length - i}</td>
                  <td>
                    <span
                      onClick={(e) => {
                        getDetail(list.itemNum);
                      }}
                    >
                      {list.itemName}
                    </span>
                  </td>
                  <td>￦{list.itemPrice.toLocaleString()}</td>
                  <td>{list.seller}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>총 {itemList.length}개의 상품이 등록 되었습니다.</p>
      </div>
      <div className={styles.detail_div}>
      {
        //isShow ? <ItemDetail itemDetail={itemDetail} changeInsert={changeInsert} /> : null
        itemDetail && <ItemDetail itemDetail={itemDetail} setItemDetail={setItemDetail}
       cnt={cnt} setCnt={setCnt} />
      }
      
      </div>
    </div>
  );
};

export default ShopList;
