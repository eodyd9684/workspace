package practice;

import javax.naming.Name;

public class MemberTest_2 {
  public static void main(String[] args) {


    MemberTest1 mt1 = new MemberTest1();

    mt1.name = "상도";
    mt1.id = "sang";
    mt1.pass = "asdf";
    mt1.age = 30;

    mt1.MemberInfo();
  }
}