import java.util.Scanner;

public class 문제_1_1 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int x = 30;
    int y = 20;

    if(x + y > 50){
      System.out.println("두 수의 합이 50보다 큽니다.");
    }
    else{
      System.out.println("두 수의 합이 50이하 입니다.");
    }
  }
}
