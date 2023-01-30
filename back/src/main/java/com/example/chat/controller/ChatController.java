package com.example.chat.controller;

import com.example.chat.dto.ChatDto;
import com.example.chat.pubsub.RedisPublisher;
import com.example.chat.repo.ChatRoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatController {

    private final RedisPublisher redisPublisher;
    private final ChatRoomRepository chatRoomRepository;

    @Autowired
    public ChatController(RedisPublisher redisPublisher, ChatRoomRepository chatRoomRepository) {
        this.redisPublisher = redisPublisher;
        this.chatRoomRepository = chatRoomRepository;
    }

    /**
     * websocket "/pub/chat/message"로 들어오는 메시징을 처리한다.
     */
    @MessageMapping("/chat/message")
    public void message(@RequestBody ChatDto message) {
        System.out.println("ChatController 실행 :" + message);
        chatRoomRepository.enterChatRoom(message.getRoomNo());
        message.setMsg(message.getUserName() + "님이 입장하셨습니다.");

        // Websocket에 발행된 메시지를 redis로 발행한다(publish)
        redisPublisher.publish(chatRoomRepository.getTopic(message.getRoomNo()), message);
    }
}