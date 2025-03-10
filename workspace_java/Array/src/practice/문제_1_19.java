package practice;

import java.util.Arrays;

public class 문제_1_19 {
  public static void main(String[] args) {
    int[] arr = new int[10];

    for (int i = 0; i < arr.length; i++){
      arr[i] = (int)(Math.random() * 100 + 1);
    }

    System.out.println(Arrays.toString(arr));

    int max = arr[0]; //0번째 요소를 가장 큰 값으로 가정
    int min = arr[0]; //0번째 요소를 가장 작은 값으로 가정
    for(int i = 0; i < arr.length; i++){
      if (max < arr[i]){
        max = arr[i];
      }
      if(min > arr[i]){
        min = arr[i];
      }
    }
    System.out.println("최대값 : " + max);
    System.out.println("최소값 : " + min);
  }
}
