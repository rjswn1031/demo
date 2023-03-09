package com.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.domain.Board.Board;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor 
@RequestMapping("/board")
@RestController
@CrossOrigin("*")
public class BoardController {
  
  @Autowired
  BoardService boardService;

  @RequestMapping("/getAllBoardData")
  public List<Board> getAllBoardData() throws Exception {
    return boardService.getAllList();
  }

  @RequestMapping("/getBoardTotalCnt")
  public Long getBoardTotalCnt() throws Exception {
    return boardService.getBoardTotalCnt();
  }
}
