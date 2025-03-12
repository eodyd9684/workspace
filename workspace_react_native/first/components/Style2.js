import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Style2 = () => {
  const [id, setId] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text>아이디</Text>
          <TextInput style={styles.idContainer} 
          // onChangeText={(text) => {setId(text)}}
          onChange={(e) => {
            console.log(e.nativeEvent)
          }}/>
        </View>
        <View>
         <Text >비밀번호</Text>
         <TextInput style={styles.pwContainer}/>
        </View>
        <View style={styles.btnView}>
          <Pressable onPress={() => {}} style={styles.btnContainer}><Text style={styles.btn}>로그인</Text></Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Style2

const styles = StyleSheet.create({
  container : {
    borderColor : 'black',
    flex : 1,
    justifyContent : 'center',
    padding : 10
  },

  content : {
    gap : 20
  },

  idContainer : {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius : 10
  },

  pwContainer : {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius : 10
  },

  btnView : {
    alignItems : 'center'
  },

  btnContainer : {
    width : '50%',
    height : 34,
    borderRadius : 6,
    backgroundColor : 'lightblue',
    justifyContent : 'center',
    alignItems : 'center'
  },

  btn : {
    color : 'white'
  }
  
})