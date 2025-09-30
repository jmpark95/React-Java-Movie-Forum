package dev.minpark.movie.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;

@Component
public class JwtUtil {
	@Value("${jwt.secret}")
    private String SECRET_KEY;
    private final Algorithm algorithm;
    private final JWTVerifier verifier;
    
    public JwtUtil(@Value("${jwt.secret}") String secretKey) {
        this.algorithm = Algorithm.HMAC256(secretKey);
        this.verifier = JWT.require(algorithm).build();
    }
        
    public String generateToken(String username) {
    	try {
    	    String token = JWT.create()
    	    		.withSubject(username)
    	    		.sign(algorithm);
    	    
    	    return token;
    	} catch (JWTCreationException exception){
    	    return "error";
    	}
    }
    
    public boolean validateToken(String token) {    	
    	try {
//    	    JWTVerifier verifier = JWT.require(algorithm)
//    	    		.build();
    	        
//    	    DecodedJWT decodedJWT = verifier.verify(token);
    	    
    	    verifier.verify(token);

    	    return true;
    	} catch (JWTVerificationException exception){
    	    return false;
    	}       
    }
    
    public String validateAndGetSubject(String token) {
        DecodedJWT jwt = verifier.verify(token);
        return jwt.getSubject();
      }



}
