import React, { useRef, useState } from 'react';
import Socket from 'react-stomp';
import { Input, Space } from 'antd';
import { ChatListMessageListStyled, ChatListRoomNameStyled, ChatListStyled } from './style';
import { SendOutlined } from '@ant-design/icons';

const { Search } = Input;

type ChatListProps = {
  room: {
    no: string;
    name: string;
  };
};

const ChatList = ({ room }: ChatListProps) => {
  const $websocket = useRef<any>(null);

  const [sendMessage, setSendMessage] = useState('');

  const [message, setMessage] = useState([
    {
      roomNo: '4',
      userName: 'h',
      userNo: '0',
      msg: 'k님이 입장하셨습니다.',
      dateTime: '2021',
      type: 'user',
    },
  ]);

  const handleSendClick = () => {
    console.log('Asd');
    let data = {
      roomNo: room.no, // 방번호
      userName: 'k', // 유저이름
      userNo: '0', // 유저번호
      msg: sendMessage, // 메세지
      dateTime: '2021', // 전송시간
      type: 'user',
    };
    //
    // axios.post('http://localhost:8080/getSocket', data).then((res) => console.log('apiRes : ', res));

    $websocket.current.sendMessage('/pub/chat/message', JSON.stringify(data));
  };

  return (
    <ChatListStyled>
      <ChatListRoomNameStyled>
        room {room.name}
      </ChatListRoomNameStyled>
      <Socket
        url='http://localhost:8080/ws-stomp'
        topics={['/sub/chat/room/' + room.no]}
        onMessage={(msg: any) => {
          console.log('socket msg : ', msg);

          setMessage([...message, msg]);
        }}
        ref={$websocket}
      />
      <ChatListMessageListStyled>
        {message.map((item) => (
          <div>asd: {item.msg}</div>
        ))}
      </ChatListMessageListStyled>
      <div>
        <Input addonAfter={<SendOutlined onClick={handleSendClick}/>} placeholder="Basic usage" style={{ width: 480 }} />
      </div>
    </ChatListStyled>
  );
};

export default ChatList;
