package com.example.chat.controller;

import com.example.chat.model.Room;
import com.example.chat.service.ChatRoomService;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatRoomController {

    private final ChatRoomService chatRoomService;

    @Autowired
    public ChatRoomController(ChatRoomService chatRoomService) {
        this.chatRoomService = chatRoomService;
    }

    @GetMapping("/room")
    public ResponseEntity<String> room() {
        return new ResponseEntity<>("1", HttpStatus.OK);
    }

    @GetMapping("/rooms")
    public ResponseEntity<Set<String>> findAllRoom() {
        List list = new ArrayList();
        return new ResponseEntity<>(chatRoomService.findAllRoom(), HttpStatus.OK);
    }

    @PostMapping("/room")
    public ResponseEntity<?> createRoom(String name) {
        return new ResponseEntity<>(chatRoomService.createRoom(name), HttpStatus.OK);
    }

    @GetMapping("/room/enter/{roomId}")
    public ResponseEntity<?> roomDetail(@PathVariable int roomId) {
        return new ResponseEntity<>("1", HttpStatus.OK);
    }

    @GetMapping("/room/{roomId}")
    public ResponseEntity<Room> roomInfo(@PathVariable String roomId) {
        return new ResponseEntity<>(new Room(), HttpStatus.OK);
    }
}