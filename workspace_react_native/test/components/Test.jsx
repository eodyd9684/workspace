import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { data } from '../data/todoList'
import { icon } from '../constants/icons'


const Test = () => {
  //todoList 데이터 받는 useState변수
  const [cateList, setCateList] = useState(data)
 
  const [newInput, setNewInput] = useState('')

  return (
    <View>
      <Text style={styles.text}>To Do List</Text>
      <TextInput 
        style={styles.input} 
        placeholder={'+ Add a Task'}
        onChangeText={text => {setNewInput(text)}}
        onSubmitEditing={() => {
         const max = Math.max(...cateList.map((e, i) => {return e.id})) + 1
         const item = {
          id : max,
          text : newInput
         }

         setCateList([...cateList, item])
         setNewInput('')
        }}
      />

      <View style={styles.main}>
        {
          cateList.map((e, i) => {
            return(
            <View style={styles.container} key={i}>
              <Text style={styles.text1}>{e.text}</Text>
              <Image source={icon.ICON_EDIT} style={styles.img}/>
              <Image source={icon.ICON_DELETE} style={styles.img}/>
            </View>
            )
          })
        }
      </View>
      
      
    </View>
  )
}

export default Test

const styles = StyleSheet.create({
  main : {
    backgroundColor : 'yellow'
  },

  container : {
    borderWidth : 1,
    backgroundColor : '#eeeeee',
    flexDirection : 'row',
    padding : 10,
    margin : 10,
    alignItems : 'center',
    borderRadius : 5
  },
  
  text : {
    fontSize : 20,
    marginHorizontal : 'auto'
  },

  text1 : {
    flex : 1,
    fontSize : 15
  },

  input : {
    borderWidth : 1,
    borderRadius : 5,
    margin : 10,
    padding : 10
  },

  img : {
    width : 20,
    height : 20
  }
})