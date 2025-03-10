package practice2;

import java.util.Scanner;
import java.util.zip.Deflater;

public class CalTest {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("첫번째 수 : ");
    int num1 = sc.nextInt();
    System.out.print("두번째 수 : ");
    int num2 = sc.nextInt();
    System.out.print("연산자 : ");
    String oper = sc.next();

    switch (oper){
      case "+":
        Add add = new Add();
        add.setValue(num1, num2);
        System.out.println(num1 + oper + num2 + "=" + add.calculate());
        break;
      case "-":
        Sub sub = new Sub();
        sub.setValue(num1, num2);
        System.out.println(num1 + oper + num2 + "=" + sub.calculate());
        break;
      case "*":
        Mul mul = new Mul();
        mul.setValue(num1, num2);
        System.out.println(num1 + oper + num2 + "=" + mul.calculate());
        break;
      case "/":
        Div div = new Div();
        div.setValue(num1, num2);
        System.out.println(num1 + oper + num2 + "=" + div.calculate());
        break;
      default:
        System.out.println("연산자를 잘 못 입력했습니다.");
    }




  }
}
