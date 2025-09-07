package dev.minpark.movie.controller;

import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.minpark.movie.entity.User;
import dev.minpark.movie.service.AuthService;
import jakarta.servlet.http.HttpServletResponse;


@RestController
@RequestMapping("/api/auth")
public class AuthController {
	private final AuthService authService;
	
	public AuthController(AuthService authService) {
		this.authService = authService;

	}
	
	@PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user, HttpServletResponse response) {
		try {
            String jwt = authService.login(user.getUsername(), user.getPassword());

            ResponseCookie cookie = ResponseCookie.from("jwt", jwt)
                    .httpOnly(true)
                    .path("/")
                    .maxAge(3600) //1hr
                    .build();

            response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
            
            return ResponseEntity.ok(Map.of("username", user.getUsername()));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
	
	@PostMapping("/logout")
	public ResponseEntity<?> logout(HttpServletResponse response) {
	    ResponseCookie deleteCookie = ResponseCookie.from("jwt", "")
	            .httpOnly(true)
	            .path("/")
	            .maxAge(0)
	            .build();

	    response.addHeader(HttpHeaders.SET_COOKIE, deleteCookie.toString());

	    return ResponseEntity.ok(Map.of("logout", "successful"));
	}
    

   
    


}
