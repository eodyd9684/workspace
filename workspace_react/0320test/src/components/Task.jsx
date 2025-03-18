import React, { useEffect, useState } from 'react'
import styles from './Test.module.css'


const Task = ({list, cartList, setCartList}) => {
  const [isShow, setIsShow] = useState(false)

  const [newText, setNewText] = useState('')

  useEffect(() => {
    setNewText(list.text)
  }, [list])

  //목록 데이터 수정
  const changeData = () => {
    const copyCartList = [...cartList]
    const findCart = copyCartList.find((cart) => {return cart.id === list.id})
    findCart.text = newText
    setCartList(copyCartList)
  }
  
  //목록 데이서 삭제
  const deleteData = () => {
    const deleteCart = [...cartList]
    const filterCart = deleteCart.filter((cart) => {return cart.id !== list.id})
    setCartList(filterCart)
  }

  return (
    isShow ? 
    <div>
      <input type='text'
              value={newText} 
              onChange={e => {setNewText(e.target.value)}}/>
      <button type='button' 
      onClick={() => {changeData()
                      setIsShow(false)
        }}
      >확인</button>
      <button type='button' 
                onClick={() => {setIsShow(false)
                                setNewText(list.text)
        }}
      >취소</button>
    </div>
    :
    <div className={styles.input}>
      <div>{list.text}
        <img src='/edit.png' onClick={e => {setIsShow(true)}}/>
        <img src="/delete.png" onClick={e => {deleteData()}}/>
      </div>
    </div>
  )
}

export default Task