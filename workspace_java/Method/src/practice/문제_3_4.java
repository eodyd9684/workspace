package practice;

import javax.xml.transform.Source;

public class 문제_3_4 {
  public static void main(String[] args) {
  boolean a = test4(4);
    System.out.println(a);

    /*if(test4(4)){

    }*/
  }

  public static boolean test4(int a) {
    return a % 2 == 0;

  }
}