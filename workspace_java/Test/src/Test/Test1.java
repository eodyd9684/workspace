package Test;

import java.util.Scanner;

public class Test1 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("첫번째 정수 : ");
    int a = sc.nextInt();
    System.out.print("두번째 정수 : ");
    int b = sc.nextInt();
    System.out.print("세번째 정수 : ");
    int c = sc.nextInt();

    int max, mid, min;

    if (a > b && a > c){
    max = a;

      if (b > c) {
        mid = b;
        min = c;
      }
      else{
        mid = c;
        min = b;
      }
    } else if (b > a && b > c) {
      max = b;

      if (a > c){
        mid = a;
        min = c;
      }
      else{
        mid = c;
        min = a;
      }
    }else{
      max = c;

      if(a > b){
        mid = a;
        min = b;
      }
      else{
        mid = b;
        min = a;
      }
    }
    System.out.println(max + " > " + mid + " > " + min);
  }
}
