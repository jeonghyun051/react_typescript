package com.example.chat.model;

import java.io.Serializable;
import java.util.UUID;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Room {

    private String no;
    private String name;

    public static Room create(String name) {
        Room room = new Room();
        room.no = UUID.randomUUID().toString();
        room.name = name;
        return room;
    }

}
