import java.util.Scanner;

public class 문제_2_1 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int a, b, c;

    System.out.print("변의 길이 입력 :");
    a = sc.nextInt();

    System.out.print("변의 길이 입력 :");
    b = sc.nextInt();

    System.out.print("변의 길이 입력 :");
    c = sc.nextInt();

    if ((a + b) > c && (a + c) > b && (b + c) > a) {
      System.out.println("참");
    }
    else
      System.out.println("거짓");

  }
}
