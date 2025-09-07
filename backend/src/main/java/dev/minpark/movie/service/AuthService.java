package dev.minpark.movie.service;

import org.springframework.stereotype.Service;

import dev.minpark.movie.config.JwtUtil;
import dev.minpark.movie.entity.User;
import dev.minpark.movie.repository.UserRepository;

@Service
public class AuthService {
	private final JwtUtil jwtUtil;
	private final UserRepository userRepository;
	
	public AuthService(JwtUtil jwtUtil, UserRepository userRepository) {
		this.jwtUtil = jwtUtil;
		this.userRepository = userRepository;
	}	

    public String login(String username, String password) {
    	User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!password.equals(user.getPassword())) {
            throw new RuntimeException("Wrong password");
        }

        return jwtUtil.generateToken(user.getUsername());
    }
    

}
