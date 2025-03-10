package practice;

public class Calculator {
  private int a;
  private int b;

  //첫번째 방법
//생성자
  /* public void setA(int a){
     this.a = a;
   }
   public void setB(int b){
     this.b = b;
   }*/

//두번째 방법
  public Calculator(int a, int b){
    this.a = a;
    this.b = b;
  }

  //더한 결과를 리턴하는 기능
  public int getSum(){
    return a + b;
  }
  //빼기 기능
  public int getSub(){
    return a - b;
  }
  //곱하기 기능
  public int getMulti(){
    return a * b;
  }
  //나누기 기능
  public double getDiv(){
    return a / (double)b;

  }

}
