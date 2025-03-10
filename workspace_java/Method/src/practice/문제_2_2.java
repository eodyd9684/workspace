package practice;

import java.util.Scanner;

public class 문제_2_2 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("첫 번째 정수 : ");
   int a = sc.nextInt();
    System.out.println("두 번째 정수 : ");
   int b = sc.nextInt();

    System.out.println(a * b);
  }

  public static int test2(int a, int b){
    return a * b;
  }
}
