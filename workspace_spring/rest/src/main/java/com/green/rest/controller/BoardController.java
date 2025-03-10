package com.green.rest.controller;

import com.green.rest.dto.BoardDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
public class BoardController {
  //1. 모든 게시글 조회하는 기능을 제공하는 REST API
@GetMapping("/boards")
  public void getBoardList(){
  log.info("게시글 목록 조회");
  }
  //2. 하나의 게시글 정보를 조회하는 기능을 제공하는 REST API
  //(GET) localhost8080:/boards/1
  @GetMapping("/boards/{boardNum}")
  public void getBoard(@PathVariable("boardNum") int boardNum){
  log.info("게시글 상세 정보 조회");
  log.info("boardNum = " + boardNum);
  }
  //3. 하나의 게시글을 등록하는 기능을 제공하는 REST API
  //(POST) localhost8080:/boards
@PostMapping("/boards")
  public void insertBoard(@RequestBody BoardDTO boardDTO){
  log.info("게시글 등록");
  log.info(boardDTO.toString());
  }
}
