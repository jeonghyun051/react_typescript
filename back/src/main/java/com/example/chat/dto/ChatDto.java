package com.example.chat.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ChatDto {

    private String roomKey = ""; // 방번호
    private String userName = ""; // 유저이름
    private String userNo = ""; // 유저번호
    private String msg = ""; // 메세지
    private String dateTime = ""; // 전송시간
    private String type = ""; // admin / user / who

}
