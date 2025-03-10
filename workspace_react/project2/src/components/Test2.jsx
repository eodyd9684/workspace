import React, { useState } from 'react'

const Test2 = () => {

  const [num, setNum] = useState('on');
  const [num1, setNum1] = useState('off')

  return (
    <>
    <div>Test2</div>
    <div className='onoff'>{num}</div>
    <button type='button' onClick={() => {
     setNum(num === 'on' ? 'off' : 'on'); 
     setNum1(num1 === 'off' ? 'on' : 'off')

    }}>{num1}</button>
    </>
  )
}

export default Test2