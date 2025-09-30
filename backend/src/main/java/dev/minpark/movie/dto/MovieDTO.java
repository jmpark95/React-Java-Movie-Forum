package dev.minpark.movie.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class MovieDTO {
    private Long id;
    private String title;
    private String overview;
    
    @JsonProperty("release_date")
    private String releaseDate;   
    
    @JsonProperty("vote_average")
    private double voteAverage;
    
    @JsonProperty("poster_path")
    private String posterPath;
    
    @JsonProperty("backdrop_path")
    private String backdropPath;
}
