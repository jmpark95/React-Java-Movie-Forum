package dev.minpark.movie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import dev.minpark.movie.dto.MovieDTO;
import dev.minpark.movie.dto.NowPlaying;

@Service
public class TmdbService {
	private final WebClient tmdbWebClient;

	public TmdbService(WebClient tmdbWebClient) {
		this.tmdbWebClient = tmdbWebClient;
	}
	
	//Centralized method for hitting TMDB API
    private List<MovieDTO> fetchMovies(String uri) {
        return tmdbWebClient
                .get()
                .uri(uri)
                .retrieve()
                .bodyToMono(NowPlaying.class)
                .block()
                .getResults();
    }
    
    

    public List<MovieDTO> getNowPlayingMovies() {
        return fetchMovies("/movie/now_playing?language=en-US&page=1");
    }

    public List<MovieDTO> getPopularMovies() {
        return fetchMovies("/movie/popular?language=en-US&page=1");
    }

    public List<MovieDTO> getTopRatedMovies() {
        return fetchMovies("/movie/top_rated?language=en-US&page=1");
    } 
    
    public List<MovieDTO> getUpcomingMovies() {
        return fetchMovies("/movie/upcoming?language=en-US&page=1");
    } 

	
	
	

  
}