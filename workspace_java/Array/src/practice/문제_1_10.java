package practice;

public class 문제_1_10 {
  public static void main(String[] args) {
    int[] a = {1, 2, 3, 4, 5, 6, 7, 8};
    int cnt = 0;
    //for-each문 사용
    for (int e : a ){
    if(e % 2 == 0){
      cnt++;
    }
      System.out.println(cnt);
    }


    System.out.println();
    //기본 for문 사용
    int sum = 0;

    for (int i = 0; i < a.length; i++){

      if (a[i] % 2 == 0){
        sum++;
      }
    }
    System.out.println(sum);
  }
}
