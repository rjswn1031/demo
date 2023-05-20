package com.movieSearcher.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movieSearcher.model.Board;
import com.movieSearcher.repository.BoardRepository;

@Service
public class BoardService {
    
    @Autowired
    private BoardRepository boardRepository;

    public void save(Board board){
        boardRepository.save(board);
    }

    public List<Board> list() {
        return boardRepository.findAll();
    }

}
