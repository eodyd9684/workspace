package com.green.shop.service;

import com.green.shop.dto.ItemDTO;
import com.green.shop.mapper.ItemMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//핵심 기능 구현
//핵심 기능은 쿼리 실행이라고 생각하면 된다.
// -> 쿼리 실행을 위해서는 ItemMapper인터페이스의 객체가 있어야 한다.
@Service
public class ItemServiceImpl implements ItemService{
 private  ItemMapper itemMapper;

 @Autowired
 public ItemServiceImpl(ItemMapper itemMapper){
   this.itemMapper = itemMapper;
 }

//상품 등록 기능 메서드
  @Override
  public int insertItem(ItemDTO itemDTO) {
    System.out.println("상품의 재고 확인한다");
    System.out.println("상품에 이상이 없는지 확인한다");
    //상품을 등록한다. -> 쿼리 실행
    System.out.println("잘 등록됐는지 확인한다.");
   int result =  itemMapper.insertItem(itemDTO);
   return result;
  }
//모든 상품의 상품번호, 상품명, 가격, 상품등록일을 조회하는 기능 메서드
  @Override
  public List<ItemDTO> selectItem() {
    return itemMapper.selectItem();
  }

//상품 하나 조회 기능 실행 메서드
  @Override
  public ItemDTO getItem(int itemCode) {
    return itemMapper.getItem(itemCode);
  }

  //4.특정 상품번호에 해당하는 상품을 삭제하는 쿼리 실행 메서드
  @Override
  public void deleteItem(int itemCode) {
   itemMapper.deleteItem(itemCode);
  }
  //5.특정 상품번호에 해당하는 상품의 상품명, 가격, 상품설명을 수정하는 기능
  @Override
  public void updateItem(ItemDTO itemDTO) {
      itemMapper.updateItem(itemDTO);
  }


}
