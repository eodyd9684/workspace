package practice;

import java.sql.SQLOutput;

public class PhoneTest_2 {
  public static void main(String[] args) {


    PhoneTest_1 pt1 = new PhoneTest_1();

    pt1.made = "apple";
    pt1.model = "iphone";
    pt1.color = "black";
    pt1.price = 100;
    pt1.phonenum = "010-1234-1234";

    pt1.PhoneInfo();

  }
}