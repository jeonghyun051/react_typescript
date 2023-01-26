package com.example.chat.controller;

import com.example.chat.dto.ChatDto;
import com.example.chat.model.User;
import com.example.chat.service.TestService;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @Autowired
    private TestService testService;

    @GetMapping("/getMap")
    public Map<Object, Object> getMap() {
        return testService.getMap();
    }

    @GetMapping("/getSet")
    public Set<Object> getSet() {
        return testService.getSet();
    }

    @GetMapping("/getChat")
    public List<ChatDto> getChat() {
        return testService.getChat();
    }

}
