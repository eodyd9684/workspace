package com.green.board.mapper;

import com.green.board.dto.BoardDTO;
import com.green.board.dto.ReplyDTO;
import com.green.board.dto.SearchDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface BoardMapper {
  //게시글 목록 조회하는 쿼리
  public List<BoardDTO> selectBoardList(SearchDTO searchDTO);
  //정보 등록 쿼리
  public void insertBoard(BoardDTO boardDTO);
  //상세 정보 조회 쿼리
  public BoardDTO getBoard(int boardNum);
  //정보를 수정하는 쿼리
  public void updateBoard(BoardDTO boardDTO);
  //게시글 삭제 쿼리
  public void deleteBoard(int boardNum);
  //조회수 증가 쿼리
  public void updateReadCnt(int boardNum);
}
