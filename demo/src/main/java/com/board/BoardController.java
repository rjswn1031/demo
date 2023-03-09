package com.board;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.stream.IntStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.domain.Board.Board;
import com.domain.Board.BoardRepository;

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

  @RequestMapping("/getBoardTotalCnt")
  public Long getBoardTotalCnt() throws Exception {
    return boardService.getBoardTotalCnt();
  }

  @RequestMapping("/insertDummyData")
  public Boolean insertDummyData() {
    Date nowDate = new Date();
    SimpleDateFormat dtFormat = new SimpleDateFormat("yyyyMMddHHmm");
    IntStream.rangeClosed(1,100).forEach(i->{
      String category = "";
      if(i%3 == 0) { category="시설"; }
      else if(i%3 == 1) { category="비용"; }
      else { category="관리"; }

      Board board = Board.builder()
                    .boardTitle("test"+i)
                    .boardWriter("admin")
                    .boardRegDate(dtFormat.format(nowDate))
                    .boardContent("이것은 테스트 글들입니다. 하하하.")
                    .prkplceNo("183-1-000014")
                    .boardCategory(category)
                    .build();
      boardRepository.save(board);
      //Memo memo = Memo.builder().memoText("테스트_____"+i).build();
      //memoRepository.save(memo);
    });

    return true;
  }
}
