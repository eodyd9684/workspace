package com.green.board.service;

import com.green.board.dto.BoardDTO;
import com.green.board.dto.SearchDTO;

import java.util.List;

public interface BoardService {
  //모든 정보를 조회하는 기능
  public List<BoardDTO> selectBoardList(SearchDTO searchDTO);
  //정보 등록 기능
  public void insertBoard(BoardDTO boardDTO);
  //상세 정보 조회 기능
  public BoardDTO getBoard(int boardNum);
  //정보를 수정하는 기능
  public void updateBoard(BoardDTO boardDTO);
  //게시글 삭제 기능
  public void deleteBoard(int boardNum);

}
