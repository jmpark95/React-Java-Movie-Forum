package dev.minpark.movie.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

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
    
    
    
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getOverview() {
		return overview;
	}
	public void setOverview(String overview) {
		this.overview = overview;
	}
	public String getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}
	public double getVoteAverage() {
		return voteAverage;
	}
	public void setVoteAverage(double voteAverage) {
		this.voteAverage = voteAverage;
	}
	public String getPosterPath() {
		return posterPath;
	}
	public void setPosterPath(String posterPath) {
		this.posterPath = posterPath;
	}
}
