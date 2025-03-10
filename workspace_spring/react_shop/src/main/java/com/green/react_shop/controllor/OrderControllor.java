package com.green.react_shop.controllor;

import com.green.react_shop.dto.OrderDTO;
import com.green.react_shop.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/orders")
@RestController
public class OrderControllor {
  private OrderService orderService;

  public OrderControllor(OrderService orderService){
    this.orderService = orderService;
  }

  @PostMapping("")
  public void insertOrder(@RequestBody OrderDTO orderDTO){
    orderService.insertOrder(orderDTO);
  }

  @GetMapping("")
  public List<OrderDTO> getOrderList(){
    return orderService.getOrderList();
  }
}
