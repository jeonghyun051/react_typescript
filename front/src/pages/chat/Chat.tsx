import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import RoomList from '../../components/room/RoomList';
import ChatList from '../../components/chat/ChatList';
import { ChatRoomListStyled, ChatStyled } from './style';

const user = [
  {
    roomNo: '2',
    roomName: 'second',
  },
  {
    roomNo: '3',
    roomName: 'th',
  },
];

const Chat = () => {
  const [room, setRoom] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState({
    no: '',
    name: '',
  });

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
        <ChatList room={selectedRoom} />
        <ChatRoomListStyled>
          {room.map((item, index) => (
            <RoomList key={index} room={item} />
          ))}
        </ChatRoomListStyled>
      </ChatStyled>
    </>
  );
};

export default Chat;
