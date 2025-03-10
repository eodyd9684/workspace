import React, { useState } from 'react'

const Input_2 = () => {
  //이름을 입력하는 input 태그에 작성한 내용을 저장할 state변수
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  // const [add, setAdd] = useState('');

  const[data, setData] = useState({
    name : '',
    age : '',
    add : ''
  })

  //input태그의 값이 변경되는 실행시킬 함수
  function changeData(e){
    setData({
      ...data,
      [e.target.name] : e.target.value
    });
  }

  return (
    <>
    이름 : <input name='name' type="text" value={data.name} onChange={(e) => {
        changeData(e);
        }}/>
        <br />
        
    나이 : <input name='age' type="text" value={data.age} onChange={(e) => {
        changeData(e);
          }}/>
          <br />

    주소 : <input name='add' type="text" value={data.add} onChange={(e) => {
        changeData(e);
            }}/>
      {/* 이름 : <input type="text" value={name} onChange={(e) => {
        setName(e.target.value);
      }}/> <br />
      나이 : <input type="text" value={age} onChange={(e) => {
        //input 태그의 값이 변경될 때마다(input 태그에 입력할때마다)
        //input 태그에 작성한 데이터를 age변수에 저장한다
        setAge(e.target.value);
      }}/> <br />
      주소 : <input type="text" value={add} onChange={(e) => {
        setAdd(e.target.value);
      }}/> <br />*/}

      <div>
        입력받은 이름 :{data.name}
      </div>
      <div>
        입력받은 나이 :{data.age}
      </div>
      <div>
        입력받은 주소 :{data.add}
      </div>
    </>
  )
}

export default Input_2