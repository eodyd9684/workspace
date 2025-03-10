package Test;

import java.util.Scanner;

public class Test3 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int a;
    int num1;
    int clapcnt = 0;

    System.out.print("1~999까지의 수 입력 : ");
    a = sc.nextInt();
    //b는 백의자리
    //c는 십의자리
    //d는 일의자리
    num1 = a % 100;
    int b = a / 100;
    int c = num1 / 10;
    int d = a % 10;

    if (b == 3 || b == 6 || b ==9){
      clapcnt++;
    }

    if(c == 3 || c == 6 || c ==9){
      clapcnt++;
    }

    if (d == 3 || d == 6 || d == 9){
      clapcnt++;
    }
    switch (clapcnt){
      case 0:
        System.out.println("박수 0번");
        break;
      case 1:
        System.out.println("박수 1번");
        break;
      case 2:
        System.out.println("박수 2번");
        break;
      case 3:
        System.out.println("박수 3번");
    }
  }
}
