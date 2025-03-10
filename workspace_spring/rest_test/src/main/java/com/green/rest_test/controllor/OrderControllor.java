package com.green.rest_test.controllor;

import com.green.rest_test.dto.OrderDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@Slf4j
public class OrderControllor {

//1.모든 주문정보를 조회하는 기능을 제공하는 REST API
@GetMapping("/orders")
public List<OrderDTO> orderList(){
  List<OrderDTO> orderList = new ArrayList<>();
  orderList.add(new OrderDTO(101, 15000, 2, "데님 청바지", "abc"));
  orderList.add(new OrderDTO(102, 10000, 3, "맨투맨 반팔 티셔츠", "bbc"));
  orderList.add(new OrderDTO(103, 25000, 2, "오버핏 니트", "cbc"));
  orderList.add(new OrderDTO(104, 55000, 1, "롱 패딩", "dbc"));
  orderList.add(new OrderDTO(105, 12000, 3, "맨투맨 긴팔 티셔츠", "ebc"));

  return orderList;
}
//2.하나의 주문정보를 조회하는 기능을 제공하는 REST API
@GetMapping("/orders/{listNum}")
public void getOrder(@PathVariable("listNum") int listNum){
  log.info("listNum = " + listNum);
}
//3.하나의 주문정보를 등록하는 기능을 제공하는 REST API
@PostMapping("/orders")
public void insertOrder(@RequestBody OrderDTO orderDTO){
  log.info(orderDTO.toString());
}
//4.하나의 주문정보를 삭제하는 기능를 제공하는 REST API
@DeleteMapping("/orders/{listNum}")
public void deleteOrder(@PathVariable("listNum") int listNum){
  log.info("listNum = " + listNum);
}
//5.하나의 주문정보에서 상품명과 상품가격을 수정하는 기능을 제공하는 REST API
@PutMapping("/orders/{listNum}")
public void putOrder(@PathVariable("listNum") int listNum, @RequestBody OrderDTO orderDTO){
  log.info("listNum = " + listNum);
  log.info("orderDTO = " + orderDTO);
 }
}
