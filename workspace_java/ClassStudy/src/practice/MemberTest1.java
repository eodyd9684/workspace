package practice;

public class MemberTest1 {
 String name;
 String id;
 String pass;
 int age;


  public void setName(String name1){
    name = name1;
  }
  public void setId(String id1){
    id = id1;
  }
  public void setPass(String pass1){
    pass = pass1;
  }
  public void setAge(int age1){
    age = age1;
  }
  public void MemberInfo(){
    System.out.println("이름 : " + name);
    System.out.println("아이디 : " + id);
    System.out.println("비밀번호 : " + pass);
    System.out.println("나이 : " + age);
  }
}
