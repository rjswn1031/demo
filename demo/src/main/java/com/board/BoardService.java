package com.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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

  public Page<Board> getPagingList(PageRequest page) throws Exception {
    return boardRepository.findAll(page);
  }

  public Long getBoardTotalCnt() throws Exception {
    return boardRepository.countBy();
  }
}
