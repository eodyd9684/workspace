package practice;

import java.util.Scanner;

public class 문제_1_8to9 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    //8번
    System.out.println("정수 입력 : ");
    int num1 = sc.nextInt();
    text1(num1);

    //9번
    System.out.print("첫번째 정수 : ");
    int a = sc.nextInt();
    System.out.print("두번째 정수 : ");
    int b = sc.nextInt();
    text2(a, b);

  }
  public static void text1(int num1){
    System.out.println(num1);
  }
  public static void text2(int a, int b){
    System.out.println(a + b);
  }
}
