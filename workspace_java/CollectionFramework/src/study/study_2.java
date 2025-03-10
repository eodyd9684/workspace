package study;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class study_2 {
  public static void main(String[] args) {
    List<Integer> list = new ArrayList<>();

    Scanner sc = new Scanner(System.in);



    for(int i = 0; i < 5; i++){
      System.out.println(i + 1 + "정수 입력 : ");
      int a = sc.nextInt();
      list.add(a);
    }
    int sum = 0;
    for(int i = 0; i < list.size();i++){
      sum = sum + list.get(i);
    }
    System.out.println("sum = " + sum);

  }
}
