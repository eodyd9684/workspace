export const data = [
    {
      id : 1,
      item : '달걀 한 판'
    },
    {
      id : 2,
      item : '라면 한 묶음'
    },
    {
      id : 3,
      item : '주방 세제'
    }
  ]

  //data에서 id가 2인 데이터 찾기
  for(const e of data){
    if(e.id === 2){
      //찾았다
    }
  }
  //data에서 id가 2인 데이터 찾기
  //e : 배열에 있는 데이터 하나하나
  //find : return에 작성한 조건문과 일치하는 데이터만 리턴해준다.
  const aaa = data.find((e) => {return e.id === 2})
  const aaa1 = data.find(e => e.id === 2) //return을 생략하려면 {}도 생략해준다

  //filter : 리턴문에 작성한 조건과 일치하는 데이터는 걸러낸다.
  data.filter(() => {})
  const aaa2 = data.filter((e) => {return e.id === 2})
  const aaa3 = data.filter(e => e.id === 2)




