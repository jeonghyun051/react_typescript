package com.example.chat.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class UserRoomId implements Serializable {

    @Column(name = "user_no")
    private long userNo;

    @Column(name = "room_no")
    private long roomNo;

}
