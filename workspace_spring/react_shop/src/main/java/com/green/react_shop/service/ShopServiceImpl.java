package com.green.react_shop.service;

import com.green.react_shop.dto.ShopDTO;
import com.green.react_shop.mapper.ShopMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor //생성자 주입코드
@Service
public class ShopServiceImpl implements ShopService{
  private final ShopMapper shopMapper;

//  @Autowired
//  public ShopServiceImpl(ShopMapper shopMapper){
//    this.shopMapper = shopMapper;
//  }

  @Override
  public List<ShopDTO> selectShop() {
    return shopMapper.selectShop();
  }

  @Override
  public ShopDTO detailShop(int itemNum) {
    return shopMapper.detailShop(itemNum);
  }

  @Override
  public void insertShop(ShopDTO shopDTO) {
  shopMapper.insertShop(shopDTO);
  }

  @Override
  public void updateShop(ShopDTO shopDTO) {
    shopMapper.updateShop(shopDTO);
  }
}

