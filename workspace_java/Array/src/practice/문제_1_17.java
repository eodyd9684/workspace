package practice;

//시험문제!!!!

public class 문제_1_17 {
  public static void main(String[] args) {
    int[] arr = new int[6];


    for (int i = 0; i < arr.length; i++){
      //배열의 모든 요소에 1~45까지의 랜덤한 정수 저장
      arr[i] = (int)(Math.random() * 45 + 1);
      System.out.print(arr[i] + " ");
    }
  }
}
