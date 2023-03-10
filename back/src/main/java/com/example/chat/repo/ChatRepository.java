package com.example.chat.repo;

import com.example.chat.dto.ChatDto;
import com.example.chat.model.Room;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ChatRepository {


    private final RedisTemplate<String, Object> redisTemplate;

    @Autowired
    public ChatRepository(RedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public List<ChatDto> getChat(Room room) {
        List<ChatDto> rList = null;

        rList = (List) redisTemplate.opsForList().range(Long.toString(room.getNo()) , 0 ,-1);

        return rList;
    }

}
