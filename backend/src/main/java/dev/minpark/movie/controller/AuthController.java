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


@RestController
@RequestMapping("/api/auth")
public class AuthController {
	private final AuthService authService;
	
	public AuthController(AuthService authService) {
		this.authService = authService;

	}
	
	@PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
		try {
            String jwt = authService.login(user.getUsername(), user.getPassword());

            ResponseCookie cookie = ResponseCookie.from("jwt", jwt)
                    .httpOnly(true)
                    .path("/")
                    .maxAge(3600) //1hr
                    .build();
            
            return ResponseEntity.ok()
                    .header(HttpHeaders.SET_COOKIE, cookie.toString())
                    .body(Map.of("username", user.getUsername()));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
	
	@PostMapping("/logout")
	public ResponseEntity<?> logout() {
		try {
			ResponseCookie deleteCookie = ResponseCookie.from("jwt", "")
		            .httpOnly(true)
		            .path("/")
		            .maxAge(0)
		            .build();

		    return ResponseEntity.ok()
		    		.header(HttpHeaders.SET_COOKIE, deleteCookie.toString())
		    		.body(Map.of("logout", "successful"));
			
		} catch(RuntimeException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}

	}
    

   
    


}
