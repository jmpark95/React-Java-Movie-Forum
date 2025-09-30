package dev.minpark.movie.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import dev.minpark.movie.config.JwtUtil;
import dev.minpark.movie.entity.User;
import dev.minpark.movie.repository.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
	private final JwtUtil jwtUtil;
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;	

    public String login(String username, String password) {
    	User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        if (!passwordEncoder.matches(password, user.getPassword())) {
        	throw new RuntimeException("Wrong password");
        }

        return jwtUtil.generateToken(user.getUsername());
    }
    

}
