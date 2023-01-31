import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import RoomList from '../../components/room/RoomList';
import ChatList from '../../components/chat/ChatList';

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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* {user.map((item) => ( */}
        <ChatList room={selectedRoom} />
        {/* ))} */}
        <div style={{ height: '400px', marginLeft: '10px', background: '#F5F5F5', border: '1px solid #e6e6e6' }}>
          {room.map((item) => (
            <RoomList room={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Chat;
