package com.example.chat.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("*")
            .allowedMethods("GET", "POST", "HEAD", "OPTIONS", "PUT", "DELETE")
            .maxAge(3600)
            .allowedHeaders("x-requested-with", "origin", "content-type",
                "accept", "authorization", "content-type",
                "transaction-id","timestamp");
    }

}
