import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/colors'


const MyButton = ({btnSize = 'normal', onPress, title='버튼'}) => {
  return (
    // <Pressable style={[styles.btnContainer, styles[btnSize]]}> //클래스 여러개 쓸경우
    <Pressable style={(e) => {
      console.log(e)
      return [styles.btnContainer, styles[btnSize], e.pressed && styles.pressed]
      }}
      onPress={onPress}
    >
      <Text style={styles.btn}>{title}</Text>
    </Pressable>
  )
}

export default MyButton

const styles = StyleSheet.create({
  
  btnContainer : {
    height : 30,
    borderRadius : 6,
    backgroundColor : COLOR.BTN_BACKGROUND_COLOR,
    justifyContent : 'center',
    alignItems : 'center',
    paddingVertical : 2, //padding 상하
    paddingHorizontal : 4 //padding 좌우
  },

  btn : {
    color : 'white'
  },

  normal : {
    width : '30%'
  },

  large : {
    width : '50%'
  },

  pressed : {
    opacity : 0.8 //투명도 0으로 갈수록 투명
  }
})