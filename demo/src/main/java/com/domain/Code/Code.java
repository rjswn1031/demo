package com.domain.Code;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

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
@Table(name = "code_info")
public class Code {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
	private String cdCd;
	private String cdNm;
	private String cdType;
 	
}
