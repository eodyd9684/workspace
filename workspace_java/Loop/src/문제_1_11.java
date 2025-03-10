import java.util.Scanner;

public class 문제_1_11 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
/*

    int num = 0;

    int a;
    System.out.print("첫번째 수 : ");
    a = sc.nextInt();

    int b;
    System.out.print("두번째 수 : ");
    b = sc.nextInt();

    //5 10
    for(int i = a; i < b + 1 ; i++){
      num = num + i;

    }
    System.out.print(num);
*/
    int num1, num2;

    System.out.print("첫번째 수 : ");
    num1 = sc.nextInt();
    System.out.print("두번째 수 : ");
    num2 = sc.nextInt();

    //두 수 중 큰 수와 작은 수를 구분

    int min = num1 > num2 ? num2 : num1;
    int max = num1 > num2 ? num1 : num2;

    int i = min + 1;
    int sum = 0;

    while (i < max) {
      sum = sum + i;
      i++;

    }
    System.out.println(sum);
  }
}
