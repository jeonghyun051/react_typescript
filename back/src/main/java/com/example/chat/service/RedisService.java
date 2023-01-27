package com.example.chat.service;

import com.example.chat.Person;
import com.example.chat.PersonRedisRepository;
import com.example.chat.dto.ChatDto;
import com.example.chat.model.User;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.SetOperations;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;
import org.springframework.stereotype.Service;

@Service
public class TestService {

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    @Autowired
    private PersonRedisRepository repo;


    public Map<Object, Object> getMap() {

        HashOperations<String, Object, Object> hashOperations = redisTemplate.opsForHash();
        String hashKey = "hashKey";

        hashOperations.put(hashKey, "hello", "world");
        Object value = hashOperations.get(hashKey, "hello");
        System.out.println("value : " + value);
        Map<Object, Object> entries = hashOperations.entries(hashKey);

        return entries;
    }

    public Set<Object> getSet() {

        SetOperations<String, Object> setOperations = redisTemplate.opsForSet();
        String setKey = "setKey";

        Set<Object> members = setOperations.members(setKey);

        return members;
    }

    public List<ChatDto> getChat() {

        String roomKey = "1";
        List<ChatDto> rList = null;

        ChatDto chat = new ChatDto("room1","kjh","1","msg1",new Date().toString(),"user");
        ChatDto chat2 = new ChatDto("room1","kjh","1","msg2",new Date().toString(),"user");
        ChatDto chat3 = new ChatDto("room2","kjh","1","msg3",new Date().toString(),"user");

        redisTemplate.setKeySerializer(new StringRedisSerializer()); // String 타입
        redisTemplate.setValueSerializer(new Jackson2JsonRedisSerializer<>(ChatDto.class));

        redisTemplate.opsForList().rightPush(chat.getRoomKey(), chat);
        redisTemplate.opsForList().rightPush(chat2.getRoomKey(), chat2);
        redisTemplate.opsForList().rightPush(chat3.getRoomKey(), chat3);

        rList = (List) redisTemplate.opsForList().range(chat.getRoomKey(), 0 ,-1);

        Person person = new Person("Park33", 20);

        // 저장
        repo.save(person);

        // `keyspace:id` 값을 가져옴
        System.out.println(repo.findById(person.getId()));


        return rList;

    }
}
