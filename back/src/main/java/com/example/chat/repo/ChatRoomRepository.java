package com.example.chat.repo;

import com.example.chat.dto.ChatDto;
import com.example.chat.model.Room;
import com.example.chat.pubsub.RedisSubscriber;
import java.util.Set;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.data.redis.listener.RedisMessageListenerContainer;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Repository
public class ChatRoomRepository {
    // 채팅방(topic)에 발행되는 메시지를 처리할 Listner
    private final RedisMessageListenerContainer redisMessageListener;
    // 구독 처리 서비스
    private final RedisSubscriber redisSubscriber;
    // Redis
    private static final String CHAT_ROOMS = "CHAT_ROOM";
    private final RedisTemplate<String, Object> redisTemplate;
    private HashOperations<String, String, Object> opsHashChatRoom;
    // 채팅방의 대화 메시지를 발행하기 위한 redis topic 정보. 서버별로 채팅방에 매치되는 topic정보를 Map에 넣어 roomId로 찾을수 있도록 한다.
    private Map<String, ChannelTopic> topics;

    @PostConstruct
    private void init() {
        opsHashChatRoom = redisTemplate.opsForHash();
        topics = new HashMap<>();
    }

    public Set<String> findAllRoom() {
        Set<String> list = redisTemplate.keys("*");
        return list;
    }

    public Object findRoomById(String id) {
        return opsHashChatRoom.get(CHAT_ROOMS, id);
    }

    /**
     * 채팅방 생성 : 서버간 채팅방 공유를 위해 redis hash에 저장한다.
     */
    public Room createChatRoom(String name) {
        Room room = new Room();
        room.setNo("1");
        room.setName("첫번째 방");

        ChatDto chatDto = new ChatDto();

        System.out.println(name);

//        Room room = Room.create(name);

//        redisTemplate.setKeySerializer(new StringRedisSerializer()); // String 타입
//        redisTemplate.setValueSerializer(new Jackson2JsonRedisSerializer<>(Room.class));

//        redisTemplate.opsForList().rightPush(room.getNo(),chatDto);
//        redisTemplate.opsForList().rightPush(room.getNo(),chatDto);


        opsHashChatRoom.put("aa","aa",room);

        return room;
    }

    /**
     * 채팅방 입장 : redis에 topic을 만들고 pub/sub 통신을 하기 위해 리스너를 설정한다.
     */
    public void enterChatRoom(String roomId) {

        System.out.println("enterChatRoom 실행 : " + roomId);
        ChannelTopic topic = topics.get(roomId);

        if (topic == null) {
            topic = new ChannelTopic(roomId);
        }

        System.out.println("topic : " + topic);
        redisMessageListener.addMessageListener(redisSubscriber, topic);
        topics.put(roomId, topic);
    }

    public ChannelTopic getTopic(String roomId) {
        return topics.get(roomId);
    }
}