package study;

public class study_9 {
  private String name;
  private int korsc;
  private int engsc;
  private int tosc;

  public study_9(String name, int korsc, int engsc) {
    this.name = name;
    this.korsc = korsc;
    this.engsc = engsc;
    this.tosc = korsc + engsc;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getKorsc() {
    return korsc;
  }

  public void setKorsc(int korsc) {
    this.korsc = korsc;
  }

  public int getEngsc() {
    return engsc;
  }

  public void setEngsc(int engsc) {
    this.engsc = engsc;
  }

  public int getTosc() {
    return tosc;
  }

  public void setTosc(int tosc) {
    this.tosc = tosc;
  }

  @Override
  public String toString() {
    return "study_9{" +
            "name='" + name + '\'' +
            ", korsc=" + korsc +
            ", engsc=" + engsc +
            ", tosc=" + tosc +
            '}';
  }
}
