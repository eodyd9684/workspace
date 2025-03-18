import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import icon_edit from '../assets/icons/edit.png' //..대신@가능  @ <- 최상위 루트에서 폴더에서 찾음
import icon_delete from '../assets/icons/delete.png'
import { icon } from '../constants/icons'
import { data } from '../data/data'
import Task from './Task'

const CartList = () => {
  const [cartList, setCartList] = useState(data)
  const [newItem, setNewItem] = useState('')

  

  return (
    <View>
      <Text>CartList</Text>
      {/* <Image source={icon_edit}/>
      <Image source={icon_delete}/>

      <Image source={icon.ICON_EDIT}/>
      <Image source={icon.ICON_DELETE}/> */}
      
      {
        cartList.map((e, i) => {
          return(
               <Task key={i} e={e} cartList={cartList} setCartList={setCartList}/>
          )
        })
      }
      <View>
        <TextInput style={styles.input} value={newItem} onChangeText={text => setNewItem(text)}

          // onSubmitEditing : 키보드의 완료, enter 키를 눌렀을 때 실행하는 이벤트
          onSubmitEditing={() => {
            //maxId + 1 구하기
            // let max = cartList[0].id
            // for (const e of cartList){
            //   if(max < e.id){
            //     max = e.id
            //   }
            // }
            // {
            //  cartList.map((list, i) => {
            //     return list.id
            //   })
            // }
            const max1 = Math.max(...cartList.map((list, i) => {return list.id})) + 1
            //저장할 객체를 생성
            const newData = {
              id : max1,
              item : newItem
            }
            setCartList([...cartList, newData])
            setNewItem('')
          }}/>
      </View>
    </View>
  )
}

export default CartList

const styles = StyleSheet.create({
  

  input : {
    borderWidth : 1,
    margin : 10
  }
})