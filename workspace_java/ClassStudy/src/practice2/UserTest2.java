package practice2;

public class UserTest2 {
  public static void main(String[] args) {

  UserTest us = new UserTest();
  boolean result = us.login("hong", "12345");

  if (result){
    System.out.println("로그인이 되었습니다.");
    us.logout("hong");
  }
  else{
    System.out.println("id 또는 password가 올바르지 않습니다.");
  }
  }
}
