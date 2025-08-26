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

	public List<MovieDTO> getNowPlayingMovies() {
		return tmdbWebClient
				.get()
				.uri("/movie/now_playing?language=en-US&page=1")
				.retrieve()
				.bodyToMono(NowPlaying.class)
				.block()
				.getResults();
	}

  
}

