public class 문제_1_7 {
/*  public static void main(String[] args) {

    int num = 1;
    int sum = 0;

    while (num < 101){
      if(num % 5 == 0){
        sum++;
        System.out.print(num + " ");
      }
      num++;
    }
    System.out.println();
    System.out.print("5의 배수의 갯수 : " + sum);
  }
}*/

public static void main(String[] args) {

  int cnt = 0;

  for(int i = 1; i < 101; i++){
    if(i % 5 == 0){
      cnt++;
      System.out.println(i + " ");
    }
  }
  System.out.println();
  System.out.println(cnt);

}
}