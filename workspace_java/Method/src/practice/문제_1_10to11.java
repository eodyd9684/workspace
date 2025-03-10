package practice;

import javax.lang.model.util.ElementScanner6;
import javax.swing.text.DefaultStyledDocument;
import java.util.Scanner;

public class 문제_1_10to11 {
  public static void main(String[] args) {


    test10(5);


    test11(12, 5);
  }

  public static void test10(int num1) {
    //조건 ? 참일 때 실행 내용 : 거짓을 때 실행내용
    System.out.println(num1 % 2 == 0 ? "짝수 입니다" : "홀수입니다");

   /* System.out.println(num1);
    if (num1 % 2 == 0) {
      System.out.println("짝수입니다.");

    } else {
      System.out.println("홀수입니다.");
    }*/

  }

  public static void test11(int num2,int num3){

    if (num2 % 2 == 0 &&  num3 % 2 ==0){
      System.out.println("짝수 입니다.");
    }
    else if (num2 % 2 == 1 && num3 % 2 ==1 ){
      System.out.println("두 수는 홀수 입니다");
    }
    else {
      System.out.println("한 수만 짝수입니다");
    }


  }
}




