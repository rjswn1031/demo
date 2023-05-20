package com.movieSearcher.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.movieSearcher.model.Movie;
import com.movieSearcher.repository.MovieRepository;

@Service
public class MovieService {
    
    @Autowired
    private MovieRepository movieRepository;

    public void save(Movie movie) {
        movieRepository.save(movie);
    }

    public List<Movie> movieList() {
        return movieRepository.findAll();
    }

}
