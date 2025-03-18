import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { icon } from '../constants/icons'

const Task = ({e, cartList, setCartList}) => {
  //각 상품이 수정 상태인지, 수정 상태가 아닌지 판단하는 변수
  const [isEditing, setIsEditing] = useState(false)

  //수정을 위해서는 input태그에 입력한 글자, id도 필요
  //전체 데이터도 필요

  //input태그에 입력한 데이터
  //주의! props로 전달된 데이터를 state 변수의 초기값으로 주면 안 됨
  const [newText, setNewText] = useState('')

  useEffect(() => {
    setNewText(e.item)
  }, [e])

  //장바구니 목록 데이터 수정
  const handleCartList = () => {
    //상품목록에서 현재 수정 중인 상품의 id를 찾아서
    //찾은 상품의 item 속성값을 input 태그에 입력한
    //글자로 바꿔준다.
    // cartList
    // e.id
    // newText
    // setCartList()

    //----------1번풀이 ----------//
    // const copyCateList = [...cartList]
    // for(const cart of copyCateList){
    //   if(cart.id === e.id){
    //     cart.item = newText
    //   }
    // }
    // setCartList(copyCateList)
    //----------1번풀이 끝----------//

    //----------2번풀이 ----------//
    //find : 조건과 일치하는 데이터만 리턴한다.
    //filter : 조건과 일치하는 데이터만 필터링한다.(제외한다)
    //순서가 바뀜 -- x
    // const findCart = cartList.filter((cart) => {return cart.id !== e.id})
    // setCartList([...findCart, {id : e.id, item : newText}])

    const copyCateList = [...cartList]
    const findCart = copyCateList.find((cart) => {return cart.id === e.id})
    findCart.item = newText
    setCartList(copyCateList)
    //----------2번풀이 끝 ----------//
  }

  /**
   * Task에서 newText 값을 'java로 변경'
   * 이 상태에서 부모 컴포넌트인 CateList가 재랜더링이 발생
   */

  return (
    //onBlur={} 포커스아웃 이벤트
     <View style={styles.container}>
      {
        isEditing 
        ? 
        <>
          <TextInput style={styles.input} 
            autoFocus={true} 
            onBlur={() => {
              setIsEditing(false)
              setNewText(e.item)
            }}
            onChangeText={(text) => {setNewText(text)}}
            value={newText}
            onSubmitEditing={() => {handleCartList()}}
            />
        </>
        : 
        <>
          <Text style={styles.title}>{e.item}</Text>
          <Pressable onPress={() => {setIsEditing(true)}}>
            <Image source={icon.ICON_EDIT}/>
          </Pressable>
    
          <Image source={icon.ICON_DELETE} style={styles.img}/>
        </>
      }
        
      </View>
  )
}

export default Task

const styles = StyleSheet.create({
  container : {
    borderWidth : 1,
    margin : 5,
    backgroundColor : '#eeeeee',
    borderRadius : 4,
    flexDirection : 'row',
    alignItems : 'center',
    padding : 10,
    gap : 10,
    borderRadius : 10
  },

  title : {
    flex : 1,
    fontSize : 18
  },

  img : {
    width : 20,
    height : 20
  },

  input : {
    borderWidth : 1,
    width : '100%'
  }
})