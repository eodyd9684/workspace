import React from 'react'

const OrderDetail = ({info}) => {
  return (
    <>
        <div className='container'><h2>주문상세목록</h2></div>
      <table className='detail'>
        <tbody>
          <tr>
            <td className='dt'>상품번호</td>
            <td>{info.listNum}</td>
            <td className='dt'>상품명</td>
            <td>{info.list}</td>
          </tr>
          <tr>
            <td className='dt'>가격</td>
            <td>{info.price}</td>
            <td className='dt'>수량</td>
            <td>{info.cnt}</td>
          </tr>
          <tr>
            <td className='dt'>주문자ID</td>
            <td>{info.id}</td>
            <td className='dt'>구매금액</td>
            <td>{info.price * info.cnt}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default OrderDetail