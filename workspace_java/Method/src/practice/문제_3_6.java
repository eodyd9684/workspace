package practice;

import javax.swing.plaf.basic.BasicInternalFrameTitlePane;

public class 문제_3_6 {
  public static void main(String[] args) {
 int[] a = {1, 5, 70, 21, 31, 35};
 int maxDate = test6(a);
    System.out.println(maxDate);
  }
  public static int test6(int[] a){
    int max = a[0];

    for(int i = 0; i < a.length; i++){
      if (max < a[i]){
        max = a[i];

      }

    }
    return max;
  }
}
