package com.green.rest_test.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

//listNum : 상품번호
//list : 상품명
//price : 상품가격
//cnt : 수량
//id : 주문자ID
@Getter
@Setter
@ToString
public class OrderDTO {
  private int listNum, price, cnt;
  private String list, id;

  public OrderDTO(){
  }

  public OrderDTO(int listNum, int price, int cnt, String list, String id) {
    this.listNum = listNum;
    this.price = price;
    this.cnt = cnt;
    this.list = list;
    this.id = id;
  }
}
