package com.green.react_shop.controllor;

import com.green.react_shop.dto.BoardDTO;
import com.green.react_shop.dto.JoinDTO;
import com.green.react_shop.service.TestService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/test")
public class TestControllor {
  private final TestService testService;

  @GetMapping("/1")
  public List<JoinDTO> getEmpList(){
   return testService.getEmpList();
  }

  @GetMapping("/2")
  public List<BoardDTO> joinList(){
    return testService.joinList();
  }
}
