package dev.minpark.movie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class MovieForumApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieForumApplication.class, args);
	}

}
