package practice;

public class Student {
  String name;
  int age;
  String address;
  int number;
  String phone;

  public void setName(String name){
    this.name = name;
  }
  public void setAge(int age){
    this.age = age;
  }
  public void setAddress(String address){
    this.address = address;
  }
  public void setNumber(int number){
    this.number = number;
  }
  public void  setPhone(String phone){
    this.phone = phone;
  }
  public void setAll(){
    System.out.println("이름 : " + name);
    System.out.println("나이 : " + age);
    System.out.println("주소 : " + address);
    System.out.println("학번 : " + number);
    System.out.println("연락처 : " + phone);
  }
}
