package dev.minpark.movie.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import dev.minpark.movie.dto.MovieDTO;
import dev.minpark.movie.service.TmdbService;

@WebMvcTest(MovieController.class)
@AutoConfigureMockMvc(addFilters = false)
public class MovieControllerTest {
	@Autowired
	private MockMvc mockMvc;
	
	@MockitoBean
	private TmdbService tmdbService;
	
	private MovieDTO testMovie;
	
    @BeforeEach
    void setUp() {
        testMovie = new MovieDTO();
        testMovie.setId(1L);
        testMovie.setTitle("Inception");
    }
	
	@Test
	void getNowPlayingShouldReturnList() throws Exception {       
		when(tmdbService.getNowPlayingMovies()).thenReturn(List.of(testMovie));
		
        mockMvc.perform(get("/api/movies/nowplaying")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].title").value("Inception"));
	}
	
	@Test
	void getPopularShouldReturnList() throws Exception {     
		when(tmdbService.getPopularMovies()).thenReturn(List.of(testMovie));
		
        mockMvc.perform(get("/api/movies/popular")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].title").value("Inception"));
	}
	
	@Test
	void getTopRatedShouldReturnList() throws Exception {     
		when(tmdbService.getTopRatedMovies()).thenReturn(List.of(testMovie));
		
        mockMvc.perform(get("/api/movies/toprated")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].title").value("Inception"));
	}
	
	@Test
	void getUpcomingShouldReturnList() throws Exception {     
		when(tmdbService.getUpcomingMovies()).thenReturn(List.of(testMovie));
		
        mockMvc.perform(get("/api/movies/upcoming")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].title").value("Inception"));
	}
	
	

}
