import java.util.Scanner;

public class 문제_1_5 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int x;
    //String grade;

    System.out.println("점수 입력 :");
    x = sc.nextInt();

    if (x > 90 && x <= 100) {
      System.out.println("학점은 A입니다.");}
    //grade = "A";
    else if (x > 80 && x < 90) {
      System.out.println("학점은 B입니다.");}
    //grade = "B";}
    else if(x <= 80){
      System.out.println("학점은 C입니다.");}
    //grade = "C";}

          //System.out.println("학점은 " + grade + "입니다");
  }
}
