import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import MyTextInput from './MyTextInput'
import MyButton from './MyButton'

const Login = () => {
  // const [id, setId] = useState('')
  // const [pw, setPw] = useState('')

  const [data, setData] = useState({
    id : '',
    pw : ''
  })
    
  const changeData = (text, name) => {
    setData({
      ...data,
      [name] : text
    })
  }

  const onPre = () => {
    console.log('안녕하세요')
  }


  return (
    <View>
      <Text>Login</Text>

      <MyTextInput value={data.id} placeholder={'aaa'} onChangeText={text => changeData(text, 'id')}/>
      <MyTextInput value={data.pw} placeholder={'bbb'} onChangeText={text => changeData(text, 'pw')}/>

      {/* alert으로 안녕하세요 */}
      <MyButton onPress={(e) => {alert('안녕하세요')}}/> 
      {/* console에 안녕하세요 */}
      {/* 함수를 바로 보내면 함수에 ()없음 화살표함수 안에 함수를 보낼때는 함수()있어야함 */}
      <MyButton btnSize='large' onPress={onPre}/>
      <MyButton title='데이터 확인' onPress={() => {
        alert(`id = ${data.id}, pw = ${data.pw}`)
      }}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})