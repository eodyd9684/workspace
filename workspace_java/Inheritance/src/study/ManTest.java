package study;

public class ManTest {
  public static void main(String[] args) {
    //Businessman 클래스에 대한 객체 생성
    BusinessMan man = new BusinessMan("삼성");
    man.company = "삼성";
    System.out.println(man.company);
    man.tellCompany();

    man.tellName();


  }
}
