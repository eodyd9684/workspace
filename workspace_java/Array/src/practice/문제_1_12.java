package practice;

import java.util.Scanner;

public class 문제_1_12 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("생성할 배열의 길이 입력 : ");
    int arrLength = sc.nextInt();

    int[] arr = new int[arrLength];

    //배열의 값 저장
    for (int i =0; i < arr.length; i++){
    arr[i] = i + 1;
    }

    //배열의 평균 계산(합/개수)
    int sum = 0;
    for (int i = 0; i < arr.length; i++){
      sum = sum + arr[i];
    }

    for(int e :arr ){
      sum = sum + e;

    }

    double avg = (double) sum / arr.length;
    System.out.print("배열 요소의 평균 : " + avg);
  }
}

