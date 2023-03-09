package com.domain.Board;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "suggestion_board")
public class Board {

  @Id
  private int boardNo;
	private String boardTitle;
	private String boardWriter;
	private String boardRegDate;
	private String boardModDate;
	private Boolean boardDelYn;
	private String boardContent;
	private String prkplceNo;
	private Boolean boardSecret;
	private String boardCategory;
}
