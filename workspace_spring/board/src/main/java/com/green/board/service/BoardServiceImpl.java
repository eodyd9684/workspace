package com.green.board.service;

import com.green.board.dto.BoardDTO;
import com.green.board.dto.SearchDTO;
import com.green.board.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {
private BoardMapper boardMapper;

  @Autowired
  public BoardServiceImpl(BoardMapper boardMapper){
  this.boardMapper = boardMapper;
  }
  //게시글 목록 조회 기능
  @Override
  public List<BoardDTO> selectBoardList(SearchDTO searchDTO) {
    return boardMapper.selectBoardList(searchDTO);
  }
//게시글 등록 기능
  @Override
  public void insertBoard(BoardDTO boardDTO) {
  boardMapper.insertBoard(boardDTO);
  }
  //게시글 상세 조회 기능
  @Override
  public BoardDTO getBoard(int boardNum) {
    //조회수 증가 쿼리 실행
    boardMapper.updateReadCnt(boardNum);
    //상세 정보 조회 쿼리
    return boardMapper.getBoard(boardNum);
  }
  //게시글 수정 기능
  @Override
  public void updateBoard(BoardDTO boardDTO) {
    boardMapper.updateBoard(boardDTO);
  }
  //게시글 삭제 기능
  @Override
  public void deleteBoard(int boardNum) {
    boardMapper.deleteBoard(boardNum);
  }
}
