package study;

//Print 인터페이스를 구현하여 SamsungPrint 클래스를 만들거임!
public class SamsungPrint implements Print{
  @Override
  public void print() {
    System.out.println("흑백 출력 실행");
  }

  @Override
  public void colorprint() {
    System.out.println("컬러 출력 실행");
  }
}
