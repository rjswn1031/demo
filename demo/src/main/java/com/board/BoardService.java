package com.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.domain.Board.Board;
import com.domain.Board.BoardRepository;
import com.domain.Code.Code;
import com.domain.Code.CodeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardService {
  
  @Autowired
  BoardRepository boardRepository;

  @Autowired
  CodeRepository codeRepository;

  public List<Board> getAllList() throws Exception {
    return boardRepository.findAll();
  }

  public Page<Board> getPagingList(PageRequest page) throws Exception {
    return boardRepository.findAll(page);
  }

  public Long getBoardTotalCnt() throws Exception {
    return boardRepository.countBy();
  }

  public List<Code> getBoardCodeList() throws Exception {
    return codeRepository.findAllByCdType("board");
  }

  public Board insertBoard(Board board) throws Exception {
    board.setBoardDelYn(false);
    board.setBoardSecret(false);
    return boardRepository.save(board);
  }

  public Board getBoard(Board board) throws Exception {
    return boardRepository.findByBoardNo(board.getBoardNo());
  }
  
}
