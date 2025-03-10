package com.green.board.controllor;


import com.green.board.dto.BoardDTO;
import com.green.board.dto.SearchDTO;
import com.green.board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/boards")
public class BoardControllor {
  private BoardService boardService;

  @Autowired
  public BoardControllor(BoardService boardService){
    this.boardService = boardService;
  }
  //모든 게시글 조회
  @GetMapping("")
  public List<BoardDTO> selectBoardList(SearchDTO searchDTO){
    System.out.println(searchDTO);
    return boardService.selectBoardList(searchDTO);
  }

  @PostMapping("")
  public void insertBoard(@RequestBody BoardDTO boardDTO){
    boardService.insertBoard(boardDTO);
  }
  //게시글 상세 조회
  @GetMapping("/{boardNum}")
  public BoardDTO getBoard(@PathVariable("boardNum") int boardNum){
    return boardService.getBoard(boardNum);
  }
  //게시글 수정
  @PutMapping("/{boardNum}")
  public void updateBoard(@PathVariable("boardNum") int boardNum, @RequestBody BoardDTO boardDTO){
  boardDTO.setBoardNum(boardNum);
  boardService.updateBoard(boardDTO);
  }
  //게시글 삭제
  @DeleteMapping("/{boardNum}")
  public void deleteBoard(@PathVariable("boardNum") int boardNum){
    boardService.deleteBoard(boardNum);
  }
}
