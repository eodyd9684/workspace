package practice;

public class 문제_3_3 {
  public static void main(String[] args) {
  int a = test3();
    System.out.println(a);

    System.out.println(test3());
  }
  public static int test3(){

    //for (int i = 0; i < 51; i++)
    return (int)(Math.random() * 50 +1);
  }


}
