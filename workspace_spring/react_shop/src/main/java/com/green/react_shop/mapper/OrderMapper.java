package com.green.react_shop.mapper;

import com.green.react_shop.dto.OrderDTO;
import com.green.react_shop.dto.ShopDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderMapper {

  public void insertOrder(OrderDTO orderDTO);

  public List<OrderDTO> getOrderList();
}
