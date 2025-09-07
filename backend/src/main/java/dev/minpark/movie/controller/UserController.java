package dev.minpark.movie.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/user")
public class UserController {
	
    @GetMapping("/watchlist")
    public  Map<String, String> getUserWatchlist() {
    	Map<String, String> response = new HashMap<>();
        response.put("message", "Private endpoint watchlist");
        return response;
    }
    
    @GetMapping("/favourites")
    public  Map<String, String> getUserFavourites() {
    	Map<String, String> response = new HashMap<>();
        response.put("message", "Private endpoint favourites.");
        return response;
    }

	
	
}
