package com.domain.parkingInfo;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class ParkingInfo {

    @Id
    private String prkplceNo;       //주차장 id
    private String prkplceNm;       //주차장 이름
    private String prkplceSe;       //주차장 공영/민영
    private String prkplceType;     //주차장 노상/노외/부설
    private String lnmAdr;          //주차장 주소
}
