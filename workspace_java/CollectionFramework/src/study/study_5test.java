package study;

import java.util.ArrayList;
import java.util.List;

public class study_5test {
  public static void main(String[] args) {
    List<study_5> list = new ArrayList();

    study_5 s1 = new study_5("hong", "1234", "홍길동", 20);
    study_5 s2 = new study_5("kim","1345","김길동", 30);
    study_5 s3 = new study_5("lee", "4567", "이길동", 25);

    list.add(s1);
    list.add(s2);
    list.add(s3);

    for(int i = 0; i < 3; i++){
      System.out.println(list.get(i));
    }
    //7번
    int sum = 0;
    for(int i = 0; i < list.size(); i++){
       sum = list.get(i).getAge() + sum;
      //sum = sum + i;

    }
    System.out.println(sum);

    //8번
    for(int i = 0; i < list.size(); i++){
      if(list.get(i).getId().equals("홍길동")){
        list.remove(i);
      }
    }
  }
}
