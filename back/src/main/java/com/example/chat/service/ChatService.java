package com.example.chat.service;

import com.example.chat.dto.ChatDto;
import com.example.chat.model.Room;
import com.example.chat.repo.ChatRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatService {

    private final ChatRepository chatRepository;

    @Autowired
    public ChatService(ChatRepository chatRepository){
        this.chatRepository = chatRepository;
    }

    public List<ChatDto> getChat(Room room) {
        return chatRepository.getChat(room);
    }
}
