package com.domain.Board;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.domain.Code.Code;
import com.domain.parkingInfo.ParkingInfo;

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
  @GeneratedValue(strategy = GenerationType.IDENTITY)
 	private int boardNo;
	private String boardTitle;
	private String boardWriter;
	private String boardRegDate;
	private String boardModDate;
	private Boolean boardDelYn;
	private String boardContent;
	@Column(name = "PRKPLCE_NO")
	private String prkplceNo;
	private Boolean boardSecret;
	private String boardCategory;

	@ManyToOne
	@JoinColumn(name = "boardCategory", referencedColumnName = "cdCd", insertable = false, updatable = false)
	private Code code;

	@ManyToOne
	@JoinColumn(name = "PRKPLCE_NO", referencedColumnName = "PRKPLCE_NO", insertable = false, updatable = false)
	private ParkingInfo parkingInfo;
}
