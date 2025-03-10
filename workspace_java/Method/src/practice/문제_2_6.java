package practice;

public class 문제_2_6 {
  public static void main(String[] args) {
    String a = test6(5);
    System.out.println(a);
  }

  public static String test6(int a){
  //숫자 -> 문자열
  String b = String.valueOf(10);

  //문자열 -> 정수
  int c = Integer.parseInt("10");

    return String.valueOf(a);
    //return a + "";
  }
}
