package test;

public class Member {
  private String id;
  private String pw;
  private String name;
  private int age;

  public void setInfo(String id, String pw, String name, int age){
  this.id = id;
  this.pw = pw;
  this.name = name;
  this.age = age;
  }

  public void showInfo(String jave, String number, String kim, int i){
    System.out.println("id = " + id);
    System.out.println("pw = " + pw);
    System.out.println("name = " + name);
    System.out.println("age = " + age);
  }
// isLogin(“java“, “1234“) 메서드 호출 시 결과로 ‘로그인 가능’이 출력되어야 함.
  public boolean isLogin(String id, String pw){
  if (id.equals("java") && pw.equals("1234")){
  return true;
  }else{
    return false;
  }
  }



}
