package com.green.board.controllor;

import com.green.board.dto.ReplyDTO;
import com.green.board.dto.TestDTO;
import com.green.board.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/replies")
public class ReplyControllor {
  private ReplyService replyService;

  @Autowired
  public ReplyControllor(ReplyService replyService){
    this.replyService = replyService;
  }

  @GetMapping("/{boardNum}")
  public List<ReplyDTO> selectReplyList(@PathVariable("boardNum") int boardNum){
  return replyService.selectReplyList(boardNum);
  }

  //댓글 등록 api
  @PostMapping("")
  public void insertReply(@RequestBody ReplyDTO replyDTO){
    replyService.insertReply(replyDTO);
  }

  //댓글 삭제 api
  @DeleteMapping("/{replyNum}")
  public void deleteReply(@PathVariable("replyNum") int replyNum){
    replyService.deleteReply(replyNum);
  }





//  @GetMapping("/test")
//  public void test(@RequestParam("age") int age, @RequestParam("name") String name){
//    System.out.println("age = " + age);
//    System.out.println( "name = " + name);
//  }

  @GetMapping("/test")
  public void test(TestDTO testDTO){
    System.out.println(testDTO);
  }
}
