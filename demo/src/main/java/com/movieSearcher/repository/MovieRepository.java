package com.movieSearcher.repository;

import org.springframework.stereotype.Repository;
import com.movieSearcher.model.Movie;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface MovieRepository extends JpaRepository<Movie,String>{
    
}
