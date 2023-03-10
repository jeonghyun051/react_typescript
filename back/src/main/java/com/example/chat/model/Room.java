package com.example.chat.model;

import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long no;
    private String name;

//    public static Room create(String name) {
//        Room room = new Room();
//        room.no = UUID.randomUUID().toString();
//        room.name = name;
//        return room;
//    }

}
