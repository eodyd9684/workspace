package practice;

public class ManTest {
  public static void main(String[] args) {
    Man_1 Man = new Man_1();
    Man.setName("홍길동");
    Man.setAge(20);
    Man.setAddress("울산");
    Man.setAll();

    //이름 데이터 출력
    System.out.println(Man.name);
    System.out.println(Man.getName());
  }
}
