import java.util.Scanner;

public class 문제_1_2 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int x;

    System.out.println("정수 입력 :");
    x = sc.nextInt();

    if (x % 2 == 0){
      System.out.println("짝수 입니다");
    }
    else{
      System.out.println("홀수 입니다");
    }
  }
}
