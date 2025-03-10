package study;

public class PersonManager {
  public static void main(String[] args) {
    //대학동창을 5명 저장할 수 있는 배열 생성
    UnivFriend[] ufs = new UnivFriend[5];
    //대학동창이 저장될 배열의 index정보
    int ucnt = 0;

    //직장동료를 5명 저장할 수 있는 배열 생성
    CompFriend[] cfs = new CompFriend[5];
    //직장동료 저장될 배열의 index정보
    int ccnt = 0;

    //대학 동창을 생성 + 생성한 대학 동창 객체를 ufs에 저장
    ufs[ucnt++] = new UnivFriend("김자바", "010-1111-1111", "생물학과");
    ufs[ucnt++] = new UnivFriend("이자바", "010-2222-2222", "방송학과");

    //직장 동료를 생성 + 생성한 직장 동료를 cfs에 저장
    cfs[ccnt++] = new CompFriend("김사원", "010-3333-3333", "영업부");
    cfs[ccnt++] = new CompFriend("박대리님", "010-4444-4444", "인사부");

    //저장된 대학동창 정보 출력
    for(int i = 0; i < ucnt; i++){
      //ufs[i].showUnivInfo();
    }

    //저장된 직장동료 정보 출력
    for(int i = 0; i < ccnt; i++){
      //cfs[i].showCompInfo();
    }

  }
}
