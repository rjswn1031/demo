package com.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.domain.Board.Board;
import com.domain.Board.BoardRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardService {
  
  @Autowired
  BoardRepository boardRepository;

  public List<Board> getAllList() throws Exception {
    return boardRepository.findAll();
  }

  public Long getBoardTotalCnt() throws Exception {
    return boardRepository.countBy();
  }
}
