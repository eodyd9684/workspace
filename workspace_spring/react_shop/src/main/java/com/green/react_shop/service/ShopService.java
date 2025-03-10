package com.green.react_shop.service;

import com.green.react_shop.dto.ShopDTO;

import java.util.List;

public interface ShopService {
  public List<ShopDTO> selectShop();

  public ShopDTO detailShop(int itemNum);

  public void insertShop(ShopDTO shopDTO);

  public void updateShop(ShopDTO shopDTO);
}
