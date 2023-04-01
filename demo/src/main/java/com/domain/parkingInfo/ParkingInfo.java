package com.domain.parkingInfo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class ParkingInfo {

    @Id
    @Column(name = "PRKPLCE_NO")
    private String prkplceNo;           //주차장 id
    private String prkplceNm;           //주차장 이름
    private String prkplceSe;           //주차장 공영/민영
    private String prkplceType;         //주차장 노상/노외/부설
    private String lnmAdr;              //주차장 주소
    private String parkingChrgeInfo;    //주차장 요금 지불 여부 무료/유료

    private double lon;                 //경도
    private double lat;                 //위도
}
