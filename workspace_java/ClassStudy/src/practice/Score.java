package practice;

import java.util.Scanner;

public class Score {
  Scanner sc = new Scanner(System.in);
  int num1;
  int num2;
  String c;

  public void getScore(){

    System.out.println("첫 번째 수 : ");
    sc.nextInt();
    //this.num1 = num1;
    System.out.println("두 번째 수 : ");
    sc.nextInt();
    this.num2 = num2;
    System.out.println("연산자 : ");
    sc.next();
    this.c = c;

  }
  public void ScoreInfo(){
    System.out.println(num1 + c + num2 + " = ");
    if (c.equals("+")){
      System.out.println(num1 + num2);
    }
    else if (c.equals("-")) {
      System.out.println(num1 - num2);
    } else if (c.equals("*")) {
      System.out.println(num1 * num2);
    }
    else if(c.equals("/")) {
      System.out.println(num1 / num2);
    }
  }
}
