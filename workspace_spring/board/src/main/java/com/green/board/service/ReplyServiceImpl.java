package com.green.board.service;

import com.green.board.dto.ReplyDTO;
import com.green.board.mapper.ReplyMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReplyServiceImpl implements ReplyService{
  private ReplyMapper replyMapper;

  @Autowired
  public ReplyServiceImpl(ReplyMapper replyMapper){
    this.replyMapper = replyMapper;
  }
  //댓글 목록 조회
  @Override
  public List<ReplyDTO> selectReplyList(int boardNum) {
    return replyMapper.selectReplyList(boardNum);
  }
  //댓글 등록 기능
  @Override
  public void insertReply(ReplyDTO replyDTO) {
    replyMapper.insertReply(replyDTO);
  }

  //댓글 삭제 기능
  @Override
  public void deleteReply(int replyNum) {
  replyMapper.deleteReply(replyNum);
  }
}
