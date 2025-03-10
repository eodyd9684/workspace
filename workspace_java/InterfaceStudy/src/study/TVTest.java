package study;

//국제 tv 연합 기구
public class TVTest {
  public static void main(String[] args) {
    Tv tv = new LgTV();
    tv.turnOn();
    tv.volumeDown();
    tv.volumeUp();
    tv.turnOff();

  }
}
