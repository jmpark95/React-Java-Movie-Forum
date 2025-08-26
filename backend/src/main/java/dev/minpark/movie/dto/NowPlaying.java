package dev.minpark.movie.dto;

import java.util.List;

//This is a wrapper DTO to capture the "results" array in the json response
public class NowPlaying {
    private List<MovieDTO> results;

    public List<MovieDTO> getResults() {
        return results;
    }

    public void setResults(List<MovieDTO> results) {
        this.results = results;
    }

}


//	{
//	   "dates": {
//	      "maximum": "2025-08-27",
//	      "minimum": "2025-07-16"
//	   },
//	   "page": 1,
//	   "results": [
//	      {movie1},{movie2},{movie3},{etc}
//	   ],
//	   "total_pages": 208,
//	   "total_results": 4142
//	}
