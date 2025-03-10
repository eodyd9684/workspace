public class 문제_1_6 {
  /* public static void main(String[] args) {

     int num = 1;
     int sum = 0;

     while (num < 101){
       if(num % 3 == 0){
         sum++;
       }
       num++;

     }
     System.out.println("3의 배수의 개수 : " + sum);
   }
 }*/
  public static void main(String[] args) {
    int sum = 0;
    for (int i = 1; i < 101;) {
      if (i % 3 == 0) {
        sum++;

      }
      i++;
    }
    System.out.println("3의 배수의 갯수 : " + sum);
  }
}
