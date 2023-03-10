package com.example.chat.model;

import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class UserRoom {

    // User UserRoom 기본키는 User No와 Room No로 구성됩니다.
    // 따라서, @EmbeddedId 어노테이션을 사용하여 UserRoomId 클래스를 생성하고,
    // UserRoomId를 UserRoom 클래스의 id로 사용합니다.
    @EmbeddedId
    private UserRoomId id;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("userNo")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("roomNo")
    private Room room;

    @Column(name = "is_typing")
    private Boolean isTyping;   // 현재 유저가 메시지를 입력 중인지 여부

    @Column(name = "is_muted")
    private Boolean isMuted;     // 대화방에서 알림을 끄는 여부

    @Column(name = "last_read_message_id")
    private Long lastReadMessageId; // 해당 유저가 대화방에서 마지막으로 읽은 메시지의 ID

}