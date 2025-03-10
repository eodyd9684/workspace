package practice;

public class 문제_1_4to7 {
  public static void main(String[] args) {
    test4(2, 5);
    test5(3, 6, 9);
    test6(5, 2);
    test7("안녕","하세요");
  }
  public static void test4(int num1, int num2){
    System.out.println(num1 + num2);
  }
  public static void test5(int num3, int num4, int num5){
    System.out.println(num3 * num4 * num5);
  }
  public static void test6(int a, int b){
    System.out.println(a % b);
  }
  public static void test7(String c, String d){
    System.out.println(c + d);
  }
}
