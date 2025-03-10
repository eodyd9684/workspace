package practice;

import java.util.Scanner;

public class 문제_1_9 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int[] a = new int[5];

    System.out.print("정수 입력 : ");
    a[0] = sc.nextInt();

    for (int i = 0; i < a.length; i++){
      a[i] = i + 1;
      System.out.println(a[i]);
    }



  }
}
