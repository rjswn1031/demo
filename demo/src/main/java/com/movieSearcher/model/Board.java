package com.movieSearcher.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name="T_BOARD")
public class Board {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int boardId;
    private String title;
    private String contents;

}
