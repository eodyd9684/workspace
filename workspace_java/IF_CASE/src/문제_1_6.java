import java.util.Scanner;

public class 문제_1_6 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int a;

    System.out.println("정수를 입력 :");
    a = sc.nextInt();

    if(a % 5 != 0){
      System.out.println("5의 배수를 입력하세요.");
    }
  }
}
