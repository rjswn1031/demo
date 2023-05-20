package com.movieSearcher.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "T_MOVIE")
public class Movie {
    
    @Id
    private String movieCd;
    private String movieNm;
    private String movieNmEn;
    private String openDt;
    private String typeNm;
    private String nationAlt;
    private String genreAlt;
    private String directors;
    private String companys;
    private String prdtYear;
}
