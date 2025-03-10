package study;

public class BankTest {
  public static void main(String[] args) {
    //Bank 클래스에 대한 객체를 5개 저장할 수 있는 배열 bankArr를 생성

    Bank[] bankArr = new Bank[5];

    //bank클래스에 대한 객체를 5개 생성. 초기값만 마음대로.
    //그 다음 bankArr에 객체를 저장
    bankArr[0] = new Bank("김자바", 10000, "111-111");
    bankArr[1] = new Bank("박자바", 10000, "111-111");
    bankArr[2] = new Bank("최자바", 10000, "111-111");
    bankArr[3] = new Bank("이자바", 10000, "111-111");
    bankArr[4] = new Bank("서자바", 10000, "111-111");

    //bankArr에 배열에 저장된 모든 계좌의 예금액 합을 출력
    int sum = 0;
    for(int i = 0; i < bankArr.length; i++){
      sum = sum + bankArr[i].getBal();
    }
    System.out.println(sum);


    //for-each
    int sum1 = 0;
    for(Bank bank : bankArr){
      sum1 = sum1 + bank.getBal();
    }

    /// ////////////////////////////////////////

    //2. bankArr에 저장된 모든 계좌정보 중에서
    //계좌주가 "최자바"인 계좌정보를 찾고, 그 정보 중
    //예금액을 20%로 인상 시키는 코드를 작성!

    for(int i = 0; i < bankArr.length; i++){
      if(bankArr[i].getOwner().equals("최자바")){
        //최종금액 = 원래금액 * 1.2
        int result = (int)(bankArr[i].getBal() * 1.2);
        bankArr[i].setBal(result);
      }

      //for-each
      for(Bank e : bankArr){
        if(e.getOwner().equals("최자바")){
         int result = (int)(e.getBal() * 1.2);
          e.setBal(result);
        }
      }
    }

  }
}
