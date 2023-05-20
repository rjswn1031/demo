package com.movieSearcher.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.movieSearcher.model.Board;
import com.movieSearcher.model.Company;
import com.movieSearcher.model.Movie;
import com.movieSearcher.service.CompanyService;
import com.movieSearcher.service.MovieService;

import kr.or.kobis.kobisopenapi.consumer.rest.KobisOpenAPIRestService;
import kr.or.kobis.kobisopenapi.consumer.rest.exception.OpenAPIFault;

@RestController
public class MovieController {

    @Autowired
    private MovieService movieService;
    @Autowired
    private CompanyService companyService;
    private String movieList;

    @CrossOrigin
    @GetMapping("/searchMovie") 
    public List<Movie> login(Board board, Model model) {
        String key = "e757324dad81415da3b2439a0548cfee";
        //String key = "ab0d3fb79928be94fe4e540fcb36db70";
        List<Movie> resultList = null;
        try {
            KobisOpenAPIRestService kobisOpenAPIRestService = new KobisOpenAPIRestService(key);

            Map<String,String> map = new HashMap();
            // for 문으로 2000페이지까지
                
            
            map.put("targetDt","20230211");
            map.put("curPage","1");
            map.put("itemPerPage","100");

            //dailyBoxOffice = kobisOpenAPIRestService.getDailyBoxOffice(true, map);
            //API로 영화목록 가져오기
            movieList = kobisOpenAPIRestService.getMovieList(true, map);
            // List<Board> boardList = boardService.list();
            // System.out.println(boardList.toString());
            //boardService.save(board);

            JSONParser jsonParser = new JSONParser();
            JSONObject jsonMovieList = (JSONObject) jsonParser.parse(movieList);
            
            Movie movie = new Movie();
            JSONObject jsonMovieListResult = (JSONObject) jsonMovieList.get("movieListResult");
            System.out.println(movieList);
            if(jsonMovieListResult != null){
            
                List<?> movieList = (JSONArray) jsonMovieListResult.get("movieList");
                
                for (int i = 0; i < movieList.size(); i++) {
                    JSONObject movieObject = (JSONObject) movieList.get(i);
                    movie.setMovieCd((String) movieObject.get("movieCd"));
                    movie.setMovieNm((String) movieObject.get("movieNm"));
                    movie.setMovieNmEn((String) movieObject.get("movieNmEn"));
                    movie.setOpenDt((String) movieObject.get("openDt"));
                    movie.setPrdtYear((String) movieObject.get("prdtYear"));
                    movie.setTypeNm((String) movieObject.get("typeNm"));
                    movie.setNationAlt((String) movieObject.get("nationAlt"));
                    movie.setGenreAlt((String) movieObject.get("genreAlt"));
                    
                    String directorNm = "";
                    JSONArray directors = (JSONArray) movieObject.get("directors");
                    for (int j = 0; j < directors.size(); j++) {
                        if("".equals(directorNm)) directorNm += ",";
                        JSONObject director = (JSONObject) directors.get(j);
                        directorNm += director.get("directorNm");
                    }
                    movie.setDirectors(directorNm);
                    
                    String companyNm = "";
                    JSONArray companys = (JSONArray) movieObject.get("companys");
                    for (int j = 0; j < companys.size(); j++) {
                        if("".equals(companyNm)) companyNm += ",";
                        JSONObject company = (JSONObject) companys.get(j);
                        companyNm += company.get("companyCd");

                        ObjectMapper mapper = new ObjectMapper();
                        Company companyDto = mapper.readValue(company.toString(), Company.class);

                        companyService.save(companyDto);
                    }
                    
                    movieService.save(movie);
                } 
            }

            resultList = movieService.movieList();
        
        } catch (OpenAPIFault e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}
