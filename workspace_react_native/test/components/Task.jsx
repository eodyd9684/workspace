import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { icon } from '../constants/icons'

const Task = ({e, cateList, setCateList}) => {
  //수정 중인지 확인하는 state변수
  const [isShow, setIsShow] = useState(false)

  //input태그에 입력한 데이터
  const [newText, setNewText] = useState('')

  useEffect(() => {
    setNewText(e.text)
  }, [e])

  //목록 데이터 수정
  const changeData = () => {
    const copycateList = [...cateList]
    const findCateList = copycateList.find((list) => {return list.id === e.id})
    findCateList.text = newText
    setCateList(copycateList)
  }

  const deleteData = () => {
    const copycateList = [...cateList]
    const filterCateList = copycateList.filter((list) => {return list.id !== e.id})
    setCateList(filterCateList)
  }

  return (
    <View>
      {
        isShow 
        ?
        <>
          <TextInput
            onChangeText={(text) => {setNewText(text)}}
            value={newText}
            onSubmitEditing={() => {changeData()}}
            onBlur={() => {
              setIsShow(false)
              setNewText(e.text)
            }}
          />
        </>
        :
        <View style={styles.container} >
          <Text style={styles.text1}>{e.text}</Text>
          <Pressable onPress={() => {setIsShow(true)}}>
            <Image source={icon.ICON_EDIT} style={styles.img}/>
          </Pressable>
          <Pressable onPress={() => {deleteData()}}>
            <Image source={icon.ICON_DELETE} style={styles.img}/>
          </Pressable>
        </View>
      }
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  container : {
    borderWidth : 1,
    backgroundColor : '#DCD6F7',
    flexDirection : 'row',
    padding : 10,
    margin : 10,
    alignItems : 'center',
    borderRadius : 5
  },

  text1 : {
    flex : 1,
    fontSize : 15
  },

  img : {
    width : 20,
    height : 20
  }
})