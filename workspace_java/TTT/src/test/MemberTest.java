package test;

public class MemberTest {
  public static void main(String[] args) {
  Member member = new Member();
  member.showInfo("jave", "1234", "kim", 20);
    System.out.println(member);
  boolean login = member.isLogin("java", "1234");

  if (login){
    System.out.println("로그인 가능");
    member.isLogin("java", "1234");
  }
  else{
    System.out.println("로그인 불가능");
  }
  }
}
