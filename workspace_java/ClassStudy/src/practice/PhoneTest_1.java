package practice;

public class PhoneTest_1 {

  String made;
  String model;
  String color;
  int price;
  String phonenum;

  public void setMade(String made1){
    made = made1;
  }
  public void setModel(String model1){
    model = model1;
  }
  public void setColor(String color1){
    color = color1;
  }
  public void setPrice(int price1){
    price = price1;
  }
  public void setPhonenum(String phonenum1){
    phonenum = phonenum1;
  }


  //public void SetPhone(String made, String model, String color, int price, int phonenum){
  public void PhoneInfo(){
    System.out.println("제조사 : " + made);
    System.out.println("모델명 : " + model);
    System.out.println("색상 : " + color);
    System.out.println("가격 : " + price);
    System.out.println("휴대폰 번호 : " + phonenum);
  }


}

