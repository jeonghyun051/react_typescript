package com.example.chat.controller;

import com.example.chat.dto.ChatDto;
import com.example.chat.service.RedisService;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RedisController {

    @Autowired
    private RedisService redisService;

    @GetMapping("/getMap")
    public Map<Object, Object> getMap() {
        return redisService.getMap();
    }

    @GetMapping("/getSet")
    public Set<Object> getSet() {
        return redisService.getSet();
    }

    @GetMapping("/getChat")
    public List<ChatDto> getChat() {
        return redisService.getChat();
    }

}
