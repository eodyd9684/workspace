import { Route, Routes } from 'react-router-dom'
import './App.css'
import './common.css'
import ShopList from './components/ShopList'
import ShopDetail from './components/ShopDetail'
import Header from './components/Header'
import ShopInsert from './components/ShopInsert'
import './index.css'
import Order from './components/Order'
import Head from './components/Head'
import OrderList from './components/OrderList'

function App() {
  //falsy : false로 판단하는 내용
  //null, undefined, 0, ''
  
  //truthy : false한 데이터 빼고 전부.

  

  return (
    <>
   <div className='container'>
      <Head/>
        <Routes>
          {/* 상품정보 페이지 */}
          <Route path='' element={<ShopList/>}></Route>
          {/* 상품상세 페이지 */}
          {/* <Route path='/detail/:itemNum' element={<ShopDetail/>}></Route> */}
          {/* 상품 등록 페이지 */}
          <Route path='/insert' element={<ShopInsert/>}></Route>
          {/* 주문하기 페이지 */}
          <Route path='/order' element={<Order/>}></Route>
          {/* 주문목록 페이지 */}
          <Route path='order-list' element={<OrderList/>}></Route>
        </Routes>
   </div>
    </>
  )
}

export default App
