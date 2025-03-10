//1. 이름, 부서, 직급, 급여의 네 개의 데이터를 갖는 객체 emp를 생성해보세요. 각 데이터의 값은 임의의 값으로 설정하면 됩니다.

const emp = {
  name : 'kim',
  dept : '개발부',
  job : '대리',
  salary : 10000
};

//2. 5번에서 만든 emp 객체 하나를 매개변수로 받아, 전달받은 객체의 부서가 '개발부'라면 해당 객체의 급여를 출력하고, '개발부'가 아니라면 '부서가 잘못되었습니다'를 출력하는 함수를 화살표함수로 구현하고 호출하세요.
const test1 = (emp) => {
  if(emp.dept === '개발부'){
    console.log(emp.salary);
  }
  else{
    console.log('부서가 잘 못 되었습니다.');
  }
  //console.log(emp.dept === '개발부' ? emp.salary : '부사가 잘 못 되었습니다.')
};

test1(emp);


const foodList = [
  {
    name : '김치찌개',
    price : 12000,
    type : '한식',
    material : ['김치','두부', '돼지고기']
  },
  {
    name : '짜장면',
    price : 8000,
    type : '중식',
    material : ['춘장','밀가루', '양파', '오이']
  }, 
  {
    name : '불고기',
    price : 15000,
    type : '한식',
    material : ['소고기','양파', '대파']
  },
  {
    name : '탕수육',
    price : 25000,
    type : '중식',
    material : ['돼지고기','밀가루']
  }
];

//4. 매개변수로 foodList가 전달되면 모든 음식의 이름을 출력하는 함수를 화살표함수로 구현하고 호출하세요.
const test4 = (foodList) => {
  for(let i = 0; i < foodList.length; i++){
  console.log(foodList[i].name);
  }
};
test4(foodList);

//5. 매개변수로 foodList가 전달되면 한식 음식의 가격의 합을 출력하는 함수를 함수표현식으로 구현하고 호출하세요.
const test5 = function(foodList){
  let sum = 0;
  for(let i = 0; i < foodList.length; i++){
    if(foodList[i].type === '한식'){
      sum = sum + foodList[i].price;
    }
  }console.log(sum);
}
test5(foodList);

//6. 매개변수로 foodList가 전달되면 음식재료가 3개 이상인 음식정보만 새로운 배열에 담아 리턴하는 함수를 구현하고 호출하세요.
// const test6 = (foodList) => {
//   for(let i = 0; i < foodList.length; i++){
//     if(foodList[i].material.length >= 3){

//     }
//   }
// }


//7. 첫번째 매개변수로 foodList, 두번째 매개변수로 음식명이 전달되면 전달된 음식명의 모든 요리재료를 출력하는 함수를 화살표함수로 구현하고 호출하세요. 만약, 두번째 매개변수로 전달된 음식명이 없다면 '정보없음'을 출력하세요.
const test7 = (List, foodName) => {
  for(let i = 0; i < List.length; i++){
    if(List[i].name === foodName){
      console.log(List[i].material);
      return;
    }
  }
  console.log('정보없음');
  
}
test7(foodList, '김치찌개');

//매개변수로 5보다 큰 숫자가 들어올때만 안녕 출력
function aaa(num){
  if(num > 5){
    console.log('안녕');
  }
}
//매개변수로 5보다 큰 숫자가 들어올때만 안녕 출력
//return 키워드 작성 후 데이터를 작성하지 않으면 return을 만나면 함수 종료
function bbb(num){
  if(num < 5){
    return;
  }
  console.log('안녕');
}