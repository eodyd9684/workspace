import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { data } from '../data/todoList'
import { icon } from '../constants/icons'
import Task from './Task'


const Test = () => {
  //todoList 데이터 받는 useState변수
  const [cateList, setCateList] = useState(data)
 
  const [newInput, setNewInput] = useState('')

  return (
    <View>
      <Text style={styles.text}>To Do List</Text>
      <TextInput 
        style={styles.input}
        value={newInput} 
        placeholder={'+ Add a Task'}
        onChangeText={text => {setNewInput(text)}}
        onSubmitEditing={() => {
         const max = Math.max(...cateList.map((e, i) => {return e.id})) + 1
         
         const item = {
          id : max,
          text : newInput
        }
         
         if(newInput === ''){
          return
         }
         else{
           setCateList([...cateList, item])
           setNewInput('')
         }
        }}
      />

      <View style={styles.main}>
        {
          cateList.map((e, i) => {
            return(
              <Task key={i} e={e} cateList={cateList} setCateList={setCateList}/>
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
    backgroundColor : '#F4EEFF'
  },
  
  text : {
    fontSize : 40
  },
 
  input : {
    borderWidth : 1,
    borderRadius : 5,
    margin : 10,
    padding : 10
  }
})