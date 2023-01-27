package com.example.chat.service;

import com.example.chat.model.Room;
import com.example.chat.repo.ChatRoomRepository;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatRoomService {

    private final ChatRoomRepository chatRoomRepository;

    @Autowired
    public ChatRoomService(ChatRoomRepository chatRoomRepository) {
        this.chatRoomRepository = chatRoomRepository;
    }


    public Set<String> findAllRoom() {
        return chatRoomRepository.findAllRoom();
    }

    public Room createRoom(String name) {
        return chatRoomRepository.createChatRoom(name);
    }

}
