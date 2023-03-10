package com.example.chat.pubsub;

import com.example.chat.dto.ChatDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class RedisPublisher {

    private final RedisTemplate<String, Object> redisTemplate;

    public void publish(ChannelTopic topic, ChatDto message) {
        System.out.println("publish 실행 : " + topic + "," + message);

        redisTemplate.convertAndSend(topic.getTopic(), message);
    }
}