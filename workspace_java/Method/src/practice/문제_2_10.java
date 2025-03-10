package practice;

public class 문제_2_10 {
  public static void main(String[] args) {
    boolean a = test10("");
    System.out.println(a);
  }
  public static boolean test10(String a){//"java"
    //return a.length() % 2 == 0 ? true : false;

    if(a.length() % 2 == 0){
      return true;
    }
    else{
      return false;
    }
  }
}
