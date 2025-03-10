package practice;

public class Man_1 {
  String name;
  int age;
  String address;

  public void initMember(String name, int age, String address){
    this.name = name;
    this.age = age;
    this.address = address;
  }
  //맴버변수 각각의 값을 변경하는 메소드
  //setter 만드세요~
  //setter -> 맴버변수 하나의 값을 변경시키는 메서드
  //     -> setter 메서드는 이름이 정해져 있음(set맴버변수명)

  //name값을 변경하는 setter 메서드 정의
  public void setName(String name){
    this.name = name;
  }
    //age값을 변경하는 setter 정의
  public void setAge(int age){
    this.age = age;
  }

  public void setAddress(String address){
    this.address = address;
  }
  //각 맴버변수의 값을 리턴하는 메소드
  //name을 리턴하는 메서드
  //getter -> 맴버변수 하나의 값을 리턴하는 메서드
  //       -> 메서드의 이름 : get변수명
  public String getName(){
    return name;
  }

  public int getAge(){
    return age;
  }

  public String getAddress(){
    return address;
  }

  public void setAll(){
    System.out.println("이름 : " + name);
    System.out.println("나이 : " + age);
    System.out.println("주소 : " + address);
  }
}
