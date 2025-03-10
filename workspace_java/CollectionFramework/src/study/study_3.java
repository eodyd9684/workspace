package study;

import java.util.ArrayList;
import java.util.List;

public class study_3 {
  public static void main(String[] args) {


  List<String> list = new ArrayList<>();
  String s1 = new String("홍길동");
  String s2 = new String("이길동");
  String s3 = new String("김길동");
  String s4 = new String("박길동");
  String s5 = new String("길동");



  list.add(s1);
  list.add(s2);
  list.add(s3);
  list.add(s4);
  list.add(s5);

  for(String a : list){
  }
    System.out.println("해당 이름이 존재합니다");
  }
}
