import java.util.Scanner;

public class 문제_1_8 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int endnum;
    System.out.print("정수를 입력하세요 : ");
    endnum = sc.nextInt();

    //반복 시작 숫자
    int i = 1;
    //짝수의 개수를 저장할 변수
    int cnt = 0;

    //1부터 num까지 반복
    while (i < endnum +1 ){
      //숫자가 짝수라면..
      if(i % 2 == 0){
        //짝수의 개수를 1증가
      cnt++;

      }
      i++;//반복을 한 번 할대마다 i를 1 증가 시킨다
    }
    System.out.print(cnt);
  }
}
