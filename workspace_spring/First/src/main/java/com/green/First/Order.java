package com.green.First;
//listnum : 상품번호
//list : 상품명
//price : 상품가격
//cnt : 수량
//id : 주문자ID
public class Order {
  private int listnum, price, cnt;
  private String list,  id;

  public Order(int listnum, int price, int cnt, String list, String id) {
    this.listnum = listnum;
    this.price = price;
    this.cnt = cnt;
    this.list = list;
    this.id = id;
  }

  public int getListnum() {
    return listnum;
  }

  public void setListnum(int listnum) {
    this.listnum = listnum;
  }

  public int getPrice() {
    return price;
  }

  public void setPrice(int price) {
    this.price = price;
  }

  public int getCnt() {
    return cnt;
  }

  public void setCnt(int cnt) {
    this.cnt = cnt;
  }

  public String getList() {
    return list;
  }

  public void setList(String list) {
    this.list = list;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

}
