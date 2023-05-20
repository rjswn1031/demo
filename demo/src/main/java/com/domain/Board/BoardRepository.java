package com.domain.Board;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BoardRepository extends JpaRepository<Board, String>{
  
  public Long countBy();
  
  public Board findByBoardNo(int BoardNo);
  // @Query("select b, p.prkplce_nm from board b inner join fetch b.parkingInfo p")
  // public List<Object> findAllWithParkingInfo();

}
