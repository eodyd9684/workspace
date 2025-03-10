//1. 정수로 이루어진 배열이 매개변수로 들어오면 해당 배열에서 짝수만 출력하는 함수를 선언하고 호출하세요.
function test1(a){
  for(let i = 0; i < a.length; i++){
    if(a [i] % 2===0){
      console.log(a[i]);
    }
  }
}
const test_data = [1,2,3,4,5,6];
test1(test_data);
//2. 정수로 이루어진 두 배열이 매개변수로 들어오면 두 배열의 모든 요소들의 평균을 리턴하는 함수를 함수표현식으로 구현하고 호출해보세요.
const test2 = function(arr1, arr2){
  //첫번째 배열의 합
//   let sum1 = 0;
// for(const e of arr1){
//   sum1 = sum1 + e;
// }
  const sum1 = getArrSum(arr1);
  //두번째 배열의 합
// let sum2 = 0;
// for(const e of arr2){
//   sum2 = sum2 + e;
//   }
  const sum2 = getArrSum(arr2);
  //두 개를 더해.
  return (sum1 + sum2) / (arr1.length + arr2.length);
}

//배열의 합을 귀하는 함수
function getArrSum(arr){
  let sum = 0;
  for(const e of arr){
    sum = sum + e;
  }
  return sum;
}
const data1 = [1,2,3,4];
const data2 = [5,6]
const result = test2(data1, data2);
console.log(result);

//3. 문자열로 이루어진 배열이 매개변수로 전달되면 배열 각 요소의 글자 중 길이가 가장 긴 문자열을 리턴하는 함수를 화살표함수로 구현하고 호출해보세요.
const test3 = (str) =>{
  let max = str[0];
  for(let i = 0; i < str.length; i++){
    if(str[i].length > max.length){// "a" > "aa"
      max = str[i];
    }
  }
return max;
};
const data4 = ['a', 'aa', 'aaaaa', 'aaaa'];
const result1 = test3(data4);
console.log(result1);

//4. 첫번째 매개변수로 전달된 정수의 배수를 두번째 매개변수의 갯수만큼 갖는 배열을 리턴하는 함수를 선언하고 호출해보세요.
//ex>첫번째 매개변수의 인자 : 3, 두번째 매개변수의 인자: 5 -> [3,6,9,12,15]
const test4 = (a, b) => {
for(let i = 0; i < a){

}

};