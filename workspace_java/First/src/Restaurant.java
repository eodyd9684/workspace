public class Restaurant {
  private String addr;
  private Cookable chef = new Superchef();

  public void takeOrder(){
    chef.cook();
  }
}
