import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const header = () => {
  return (
    
    <>
      <div className={styles.header}>
        <ul className={styles.menu}>
          <li><Link to={'/'}>상품정보</Link></li>
          <li><Link to={'/insert'}>상품등록</Link></li>
          <li><Link to={'/order'}>주문하기</Link></li>
          <li><Link to={'/order-list'}>주문목록</Link></li>
        </ul>
      </div>
    </>
    
  )
}

export default header