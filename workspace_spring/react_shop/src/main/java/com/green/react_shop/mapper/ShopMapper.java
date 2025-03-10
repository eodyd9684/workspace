package com.green.react_shop.mapper;

import com.green.react_shop.dto.ShopDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ShopMapper {
  public List<ShopDTO> selectShop();

  public ShopDTO detailShop(int itemNum);

  public void insertShop(ShopDTO shopDTO);

  public void updateShop(ShopDTO shopDTO);
}
