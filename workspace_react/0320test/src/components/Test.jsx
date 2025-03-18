import React, { useState } from 'react'
import { data } from '../../data/todoList'
import styles from './Test.module.css'
import Task from './Task'

const Test = () => {

  const [cartList, setCartList] = useState(data)
  //console.log(cateList)
  const [newItem, setNewItem] = useState('')
  
  //console.log(newItem)
  
  
  //버튼 클릭시 id중 가장 큰id + 1 하는 함수
  const clickBtn = () => {
    const max = Math.max(...(cartList.map((e, i) => {return(e.id)}))) + 1
    console.log(max)
    setCartList([...cartList, {id : max, text : newItem}])
  }

         
  return (
    <>
     <div className={styles.maincontainer}>
        <h3>To Do List</h3>
        <input type="text" value={newItem} onChange={(e)=>{setNewItem(e.target.value)}}/>
        <button type='button' 
        onClick={() => {clickBtn()}}>등록</button>
        <div className={styles.container}>
          {
            cartList.map((list, i) => {
              return(
                <Task key={i} list={list} cartList={cartList} setCartList={setCartList}/>
              )
            })
          }
        </div>
     </div>
    </>
    
  )
}

export default Test