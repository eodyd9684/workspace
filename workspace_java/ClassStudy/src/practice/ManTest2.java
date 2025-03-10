package practice;

public class ManTest2 {
  public static void main(String[] args) {
    Man_1 m1 = new Man_1();
    m1.initMember("홍길동", 30, "울산시");

    Man_1 m2 = new Man_1();
    m2.initMember("유관순", 20, "서울시");
    //setter -> 각각의 데이터 변경 시 사용
    //getter -> 각각의 데이터를 읽어올 때 사용
    //m1과 m2중 나이가 많은 사람의 이름을 출력
    if(m1.getAge() > m2.getAge()){
      System.out.println(m1.getAge());
    }
    else {
      System.out.println(m2.getAge());
    }

    //m1 객체의 나이가 30이면
    //m1 객체의 이름을 "이순신"으로 변경하세요

    if (m1.getAge() == 30){
      m1.setName("이순신");
    }

  }
}
