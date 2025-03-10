import java.util.Scanner;

public class 문제_3_3 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int a, b;//두 정수를 저장할 변수
  String c;//연산자를 저장할 변수

    //정보입력
    System.out.print("첫 번째 수 :");
    a = sc.nextInt();
    System.out.print("두 번째 수 :");
    b = sc.nextInt();
    System.out.print("연산자 :");
    c = sc.next();

    if (c.equals("+")) {
      System.out.println(a + " " + c + " " + b + " = " + (a + b));
    }
    else if(c.equals("-")){
      System.out.println(a + " " + c + " " + b + " = " + (a - b));
    }
    else if (c.equals("*")) {
      System.out.println(a + " " + c + " " + b + " = " + (a * b));
    }
    else if(c.equals("/")){
      System.out.println(a + " " + c + " " + b + " = " + (a / (double)b));
    }
    else{
      System.out.print("연산자를 잘 못 입력하였습니다.");
    }
  }
}
