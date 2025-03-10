package study;

public class Bank {
  private String owner;//계좌주
  private int bal;//예금액
  private String accnum;//계좌번호

  public Bank(String owner, int bal, String accnum) {
    this.owner = owner;
    this.bal = bal;
    this.accnum = accnum;
  }

  public String getOwner() {
    return owner;
  }

  public void setOwner(String owner) {
    this.owner = owner;
  }

  public int getBal() {
    return bal;
  }

  public void setBal(int bal) {
    this.bal = bal;
  }

  public String getAccnum() {
    return accnum;
  }

  public void setAccnum(String accnum) {
    this.accnum = accnum;
  }

  public void printInfo(){
    System.out.println("계좌주 : " + owner);
    System.out.println("예금액 : " + bal);
    System.out.println("계좌번호 : " + accnum);

  }

}
