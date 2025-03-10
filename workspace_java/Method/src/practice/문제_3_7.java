package practice;

public class 문제_3_7 {
  public static void main(String[] args) {
  String[] b = {"집에", "가고", "싶다"};
  String t = test7(b);
    System.out.println(t);
  }

  public static String test7(String[] a) {
    String result = "";
    for (int i = 0; i < a.length; i++) {
      result = result + a[i];
    }

  return result;
  }
}
