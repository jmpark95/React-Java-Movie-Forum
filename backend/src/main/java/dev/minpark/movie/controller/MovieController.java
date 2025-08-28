package dev.minpark.movie.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.minpark.movie.dto.MovieDTO;
import dev.minpark.movie.service.TmdbService;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    private final TmdbService tmdbService;

    public MovieController(TmdbService tmdbService) {
        this.tmdbService = tmdbService;
    }

    @GetMapping("/nowplaying")
    public ResponseEntity<List<MovieDTO>> getNowPlayingMovies() {
        List<MovieDTO> movies = tmdbService.getNowPlayingMovies();
        return ResponseEntity.ok(movies);
    }
    
    @GetMapping("/popular")
    public ResponseEntity<List<MovieDTO>> getPopularMovies() {
        List<MovieDTO> movies = tmdbService.getPopularMovies();
        return ResponseEntity.ok(movies);
    }
    
    @GetMapping("/toprated")
    public ResponseEntity<List<MovieDTO>> getTopRatedMovies() {
        List<MovieDTO> movies = tmdbService.getTopRatedMovies();
        return ResponseEntity.ok(movies);
    }
    
    @GetMapping("/upcoming")
    public ResponseEntity<List<MovieDTO>> getUpcomingMovies() {
        List<MovieDTO> movies = tmdbService.getUpcomingMovies();
        return ResponseEntity.ok(movies);
    }

}
