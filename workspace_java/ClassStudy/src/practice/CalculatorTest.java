package practice;

import java.util.Scanner;

public class CalculatorTest {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("첫 번째 수 : ");
    int num1 = sc.nextInt();
    System.out.print("두 번째 수 : ");
    int num2 = sc.nextInt();
    System.out.print("연산자 : ");
    String oper = sc.next();

    //계산기 객체 생성
    //첫번째 방법
    // Calculator cal = new Calculator();
    //cal.setA(num1);
    //cal.setB(num2);

    //두번째 방법
    Calculator cal = new Calculator(num1, num2);


    switch(oper){
      case "+":
        System.out.println(num1 + oper + num2 + "=" + cal.getSum());
        break;
      case "-":
        System.out.println(num1 + oper + num2 + "=" + cal.getSub());
        break;
      case "*":
        System.out.println(num1 + oper + num2 + "=" + cal.getMulti());
        break;
      case "/":
        System.out.println(num1 + oper + num2 + "=" + cal.getDiv());
        break;
        default:
        System.out.println("연산자를 잘 못 입력했습니다.");
    }

  }
}
