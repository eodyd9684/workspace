package practice2;

public class Member {
  private String name;
  private String id;
  private String pass;

  public void setName(String name){
    this.name = name;
  }
  public void setId(String id){
    this.id = id;
  }
  public void setPass(String pass){
    this.pass = pass;
  }
  public String getName(){
    return name;
  }
  public String getId(){
    return id;
  }
  public  String getPass(){
    return pass;
  }
  public void displatInof(){
    System.out.println("이름 : " + name);
    System.out.println("아이디 : " + id);
    System.out.println("비밀번호 : " + pass);
  }
}
