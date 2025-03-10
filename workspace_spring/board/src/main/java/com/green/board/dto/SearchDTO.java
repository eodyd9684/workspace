package com.green.board.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@ToString
@Setter
public class SearchDTO {
  private String searchKeyword;
  private String searchValue;
}
