import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RoomList from '../../components/room/RoomList';
import ChatList from '../../components/chat/ChatList';
import { ButtonStyled, ChatRoomListDivStyled, ChatRoomListStyled, ChatStyled } from './style';
import { Button } from 'antd';

const Chat = () => {
  const [room, setRoom] = useState([]);

  useEffect(() => {
    async function getRooms() {
      await axios.get('http://localhost:8080/rooms').then((res) => {
        setRoom(Object.values(res.data));
        // console.log(Object.values(res.data));
      });
    }
    getRooms();
    // console.log('data', room);
  }, []);

  return (
    <>
      <ChatStyled>
        <ChatList />
        <ChatRoomListStyled>
          <ChatRoomListDivStyled>
            {room.map((item, index) => (
              <RoomList key={index} room={item} />
            ))}
          </ChatRoomListDivStyled>
          <ButtonStyled type='primary'>새 채팅방</ButtonStyled>
        </ChatRoomListStyled>
      </ChatStyled>
    </>
  );
};

export default Chat;
