import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import RoomList from '../../components/room/RoomList';
import ChatList from '../../components/chat/ChatList';
import { ButtonStyled, ChatRoomListDivStyled, ChatRoomListStyled, ChatStyled } from './ChatStyle';
import { getRoom, getRooms } from '../../api/room/api';
import { Room } from '../../types';

const Chat = () => {
  const [room, setRoom] = useState<Room[]>([]);

  useEffect(() => {
    async function init() {
      const res = await getRooms();
      setRoom(Object.values(res.data));

      const ss = await getRoom();
      console.log('ss :', ss);
    }

    init();

    // console.log('data', room);
  }, []);

  return (
    <>
      {console.log('Chat render')}
      <ChatStyled>
        <ChatRoomListStyled>
          <ChatRoomListDivStyled>
            {room.map((item) => (
              <RoomList key={item.no} room={item} />
            ))}
          </ChatRoomListDivStyled>
          <ButtonStyled type='primary'>새 채팅방</ButtonStyled>
        </ChatRoomListStyled>
        <ChatList />
      </ChatStyled>
    </>
  );
};

export default Chat;
