package practice;

import java.time.chrono.MinguoChronology;
import java.util.Scanner;

public class 문제_1_12to14 {
  public static void main(String[] args) {

   test12(10);

   int a = 5;
   int b = 15;
   test13(a, b);
   test14(13, 100);
  }
 public static void test12(int num1){
   for (int i = 0; i < num1 + 1;i++){
     System.out.println(i + " ");

    }
  }

  public static void test13(int a, int b){//1, 5 -> 12345  234
    int max = a > b ? a : b;
    int min = a < b ? a : b;
    for (int i = min + 1; i < max; i++) {
      System.out.println(i + " ");
    }
    /*int max;
    int min;
    if (a < b){
     max = b;
     min = a;
    }
    else  {
      max = a;
      min = b;
    }

    //min = 1, max = 5
    for(int i = min + 1; i < max; i++){
      System.out.println(i + " ");*/

    }


  public static void test14(int a, int b){
    int max = a > b ? a : b;
    int min = a < b ? a : b;
    int sum = 0;

    for (int i = min + 1; i < max; i++){
      if(i % 5 == 0){
        sum++;
      }
    }
    System.out.println(sum);

    /*if (a < b){//10 40
      max = b;
      min = a;
    }else {
      max = a;
      min = b;
    }
    int sum = 0;
    for(int i = min + 1; i < max; i++){
      if (i % 5 == 0){
      sum++;
      }
    }
    System.out.println(sum);*/
  }
}


