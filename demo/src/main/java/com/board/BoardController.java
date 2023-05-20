package com.board;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.stream.IntStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.domain.Board.Board;
import com.domain.Board.BoardRepository;
import com.domain.Code.Code;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor 
@RequestMapping("/board")
@RestController
@CrossOrigin("*")
public class BoardController {

  //임시
  @Autowired
  BoardRepository boardRepository;

  @Autowired
  BoardService boardService;

  @RequestMapping("/getAllBoardData")
  public List<Board> getAllBoardData() throws Exception {
    return boardService.getAllList();
  }

  @RequestMapping("/getPagingBoardData")
  public Page<Board> getPagingBoardData(@RequestParam(name="nowPage") int nowPage) throws Exception {
    System.out.println(nowPage + "=============================================================================");
    PageRequest pageRequest = PageRequest.of(nowPage, 10, Sort.by("boardNo").descending());
    return boardService.getPagingList(pageRequest);
  }

  @RequestMapping("/getBoardTotalCnt")
  public Long getBoardTotalCnt() throws Exception {
    return boardService.getBoardTotalCnt();
  }

  @RequestMapping("/getBoardCodeList")
  public List<Code> getBoardCodeList() throws Exception {
    return boardService.getBoardCodeList();
  }

  @RequestMapping("/insertBoard")
  public Boolean insertBoard(Board board) throws Exception {
    Boolean message;
    try {
      boardService.insertBoard(board);
      message = true;
    } catch (Exception e) {
      message = false;
    }
    return message;
  }

  @RequestMapping("/getBoard")
  public Board getBoard(Board board) throws Exception {
    Board retBoard = new Board();
    try {
      retBoard = boardService.getBoard(board);
    } catch (Exception e) {
    }
    return retBoard;
  }

  @RequestMapping("/insertDummyData")
  public Boolean insertDummyData() {
    Date nowDate = new Date();
    SimpleDateFormat dtFormat = new SimpleDateFormat("yyyyMMddHHmm");
    IntStream.rangeClosed(1,113).forEach(i->{
      String category = "";
      if(i%3 == 0) { category="bd01"; }
      else if(i%3 == 1) { category="bd02"; }
      else { category="bd03"; }

      // Board board = Board.builder()
      //               .boardTitle("test"+i)
      //               .boardWriter("admin")
      //               .boardRegDate(dtFormat.format(nowDate))
      //               .boardContent("이것은 테스트 글들입니다. 하하하.")
      //               .prkplceNo("183-1-000014")
      //               .boardCategory(category)
      //               .build();
      Board board = new Board();
      board.setBoardTitle("test"+i);
      board.setBoardWriter("admin");
      board.setBoardRegDate(dtFormat.format(nowDate));
      board.setBoardContent("이것은 테스트 글들입니다. 하하하.");
      //board.setPrkplceNo("183-1-000014");
      board.setBoardCategory(category);
      board.setBoardSecret(false);
      board.setBoardDelYn(false);
      boardRepository.save(board);
      //Memo memo = Memo.builder().memoText("테스트_____"+i).build();
      //memoRepository.save(memo);
    });

    return true;
  }
}
