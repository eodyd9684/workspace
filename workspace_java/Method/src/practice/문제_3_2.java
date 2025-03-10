package practice;

public class 문제_3_2 {
  public static void main(String[] args) {
  test2(10);
  }
  public static void test2(int a){
    for(int i = 1; i < 101; i++){
      if(i % a == 0){

        System.out.println(i + " ");
      }
    }
  }
}