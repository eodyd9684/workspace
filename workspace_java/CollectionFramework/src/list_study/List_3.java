package list_study;

import java.util.ArrayList;
import java.util.List;

public class List_3 {
  public static void main(String[] args) {
    //문자열을 다수 저장할 수 있는 list 객체를 생성
    List<String> list = new ArrayList<>();

    list.add("java");
    list.add("c++");
    list.add("python");

    for(int i = 0; i < list.size(); i++){
      System.out.println(list.get(i));
    }

    list.remove(0);
    //for-each
    for(String e : list){
      System.out.println(e);
    }
    System.out.println(list.size());
  }
}
