import java.util.Scanner;

public class 문제_2_3 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    //1~99 사이의 정수를 키보드로 입력!
    //박수짝, 박수짝짝
    int a;
    int clapcnt = 0; //박수의 갯수

    System.out.print("1~99 사이의 정수를 입력하시오 :");
    a = sc.nextInt();

    //입력받은 정수를 1의 자리와 10의 자리 수로 분리
    //십의 자리
    int tens = a / 10;
    //일의 자리
    int ones = a % 10;

    //만약 십의 자리 수가 3,6,9면 박수 수를 1증가
    if(tens == 3 || tens == 6 || tens == 9){

      /*clapcnt = clapcnt + 1;
      clapcnt += 1;
      ++clapcnt;
      clapcnt++;*/
    }
    //만약 일의 자리 수가 3,6,9면 박수 수를 1증가
    if(ones == 3 || ones == 6 ||ones == 9){

    }

    //clapCnt = 0, 1, 2
    //0이면 박수없음
    //1이면 박수짝
    //2면 박수짝짝
    switch (clapcnt){
      case 0:
        System.out.println("박수없음");
        break;
      case 1:
        System.out.println("박수짝");
        break;
      case 2:
        System.out.println("박수짝짝");
    }
  }
}
