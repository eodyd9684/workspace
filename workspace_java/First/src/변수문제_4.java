public class 변수문제_4 {
  public static void main(String[] args) {
    int a = 10;
    int b = 20;
    int c = b;


    System.out.println("a = " + a);
    System.out.println("b = " + b);

  b = a;
  a = c;


    System.out.println("a = " + a);
    System.out.println("b = " + b);

  }
}
