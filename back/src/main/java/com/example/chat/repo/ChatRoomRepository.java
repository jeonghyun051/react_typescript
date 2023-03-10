package com.example.chat.repo;

import com.example.chat.dto.ChatDto;
import com.example.chat.model.Room;
import com.example.chat.pubsub.RedisSubscriber;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.ArrayList;
import java.util.Set;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
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
    private HashOperations<String, Object, Object> opsHashChatRoom;
    // 채팅방의 대화 메시지를 발행하기 위한 redis topic 정보. 서버별로 채팅방에 매치되는 topic정보를 Map에 넣어 roomId로 찾을수 있도록 한다.
    private Map<String, ChannelTopic> topics;

    @PostConstruct
    private void init() {
        opsHashChatRoom = redisTemplate.opsForHash();
        redisTemplate.setHashValueSerializer(new Jackson2JsonRedisSerializer<>(Room.class));
        topics = new HashMap<>();
    }

    // 하나의 룸 가져오기
    public List<Room> findRoom(Room room) {
        List<Room> arr = new ArrayList<Room>();

        System.out.println("abc" + (Room) opsHashChatRoom.get("rooms","1"));


        arr.add((Room) opsHashChatRoom.get("rooms","1"));
//        arr.add('2', (Room) opsHashChatRoom.get("rooms","2"));
//        arr.add('3', (Room)opsHashChatRoom.get("rooms","3"));
//        arr.add('4', (Room)opsHashChatRoom.get("rooms","4"));

        return arr;
    }
    public Map<Object, Object> findAllRoom() {
        return opsHashChatRoom.entries("rooms");
    }

    public Object findRoomById(String id) {
        return opsHashChatRoom.get(CHAT_ROOMS, id);
    }

    /**
     * 채팅방 생성 : 서버간 채팅방 공유를 위해 redis hash에 저장한다.
     */
    public Room createChatRoom(Room room) {
        opsHashChatRoom.put("rooms",room.getNo(), room);
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