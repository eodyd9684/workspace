package study;

import javax.swing.plaf.basic.BasicInternalFrameTitlePane;
import java.util.ArrayList;
import java.util.List;

public class study_9test {
  public static void main(String[] args) {
    List<study_9> list = new ArrayList<>();

    study_9 st1 = new study_9("홍길동", 30, 80);
    study_9 st2 = new study_9("김길동", 90, 70);
    study_9 st3 = new study_9("이길동", 60, 80);

    list.add(st1);
    list.add(st2);
    list.add(st3);

    for (int i = 0; i < 3; i++) {
      System.out.println(list.get(i));
    }
    System.out.println();
    for (int i = 0; i < list.size(); i++) {
      if (list.get(i).getTosc() >= 150) {
        System.out.println(list.get(i));
      }
    }
    System.out.println();
    int sum = 0;
    for (int i = 0; i < list.size(); i++) {
      sum = list.get(i).getTosc() + sum;
      //sum +=list.get(i).getTosc();

    }
    double avg = (double) sum / list.size();
    System.out.println(avg);
    System.out.println();
    //총점 1등 학생의 모든 정보 출력
    //int max = 0;
    int max_index = 0; //가장 총점이 높은 학생의 index

    for(int i = 0 ; i < list.size() ; i++){
      if(list.get(i).getTosc()  >  list.get(max_index).getTosc()){
        max_index = i;
      }
    }
    System.out.println(list.get(max_index));




  }
}
