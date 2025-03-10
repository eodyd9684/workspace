package practice2;

public class UserTest {
   public boolean login(String id, String passward) {
    if(id.equals("hong") && passward.equals("12345")){
      return true;//return id.equals("hong") && passward.equals("12345") ? true : false;
    }
    else {
      return false;
    }

   }
   public void logout(String id){
     System.out.println("로그아웃 되었습니다.");
   }
}
