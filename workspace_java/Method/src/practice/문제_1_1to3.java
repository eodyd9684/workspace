package practice;

public class 문제_1_1to3 {
  public static void main(String[] args) {
  //1번 문제 호출
    test1();
    test2(5);
    test3("안녕");
  }

  //1. '안녕하세요' 라는 문자열를 출력하는 기능을 가진 메소드를 선언
  public static void test1(){
    System.out.println("안녕하세요");
  }

  //2. 정수 하나를 매개변수로 받아, 그 값을 출력하는 메소드를 선언
  public static void test2(int num){
    System.out.println(num);
  }

  //3. 문자열 하나를 매개변수로 받아
  // 그 문자열을 출력하는 메소드를 선언하고 호출해보세요.
  public static void test3(String print){
    System.out.println(print);
  }
}
