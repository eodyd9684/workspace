package com.green.react_shop.controllor;

import com.green.react_shop.dto.ShopDTO;
import com.green.react_shop.service.ShopService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/shops")
@RestController
public class ShopControllor {
  private ShopService shopService;

  public ShopControllor(ShopService shopService){
    this.shopService = shopService;
  }
  //모든 상품 목록 조회
  @GetMapping("")
  public List<ShopDTO> selectShop(){
   return shopService.selectShop();
  }
  //상세 상품 조회
  @GetMapping("/{itemNum}")
  public ShopDTO detailShop(@PathVariable("itemNum") int itemNum){
    return shopService.detailShop(itemNum);
  }
  //상품 등록
  @PostMapping("")
  public void insertShop(@RequestBody ShopDTO shopDTO ){
    shopService.insertShop(shopDTO);
  }

  @PutMapping("/{itemNum}")
  public void updateShop(@PathVariable("itemNum") int itemNum, @RequestBody ShopDTO shopDTO){
    shopDTO.setItemNum(itemNum);
    shopService.updateShop(shopDTO);
  }

}
