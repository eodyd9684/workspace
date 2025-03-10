package com.green.rest.controller;

import com.green.rest.dto.ItemDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
public class ItemController {

  //1.모든 상품을 조회하는 기능을 제공하는 REST API
  @GetMapping("/items")
  public void itemList(){
  log.info("");
}
  //2.상품 하나를 조회하는 기능을 제공하는 REST API
  @GetMapping("/items/{itemCode}")
  public void getItem(@PathVariable("itemCode") int itemCode){
    log.info("itemCode = " + itemCode);
  }
  //3.상품 하나를 등록하는 기능을 제공하는 REST API
  @PostMapping("/items")
  public void insertItem(@RequestBody ItemDTO itemDTO){
  log.info(itemDTO.toString());
  }
  //4.상품 하나를 삭제하는 기능를 제공하는 REST API
  @DeleteMapping("/items/{itemCode}")
  public void deleteItem(@PathVariable("itemCode") int itemCode){
    log.info("itemcode = " + itemCode);
  }
  //5.상품 하나의 상품명과 가격, 색상을 변경하는 기능 제공 REST API
@PutMapping("/items/{itemCode}")
  public void putItem(@PathVariable("itemCode") int itemCode, @RequestBody ItemDTO itemDTO){
  log.info("itemCode = " + itemCode);
  log.info("itemDTO = " + itemDTO);
}

}
