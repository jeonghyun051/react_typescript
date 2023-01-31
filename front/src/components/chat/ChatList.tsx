import React, { useRef, useState } from 'react';
import Socket from 'react-stomp';
import { Input, Space } from 'antd';

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

  const handleClick3 = () => {
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
    <div style={{ display: 'blcok', border: '1px solid #e6e6e6', width: '500px', height: '400px', padding: '10px' }}>
      <div style={{ textAlign: 'center', fontSize: '17px' }}>room {room.name}</div>
      <Socket
        url='http://localhost:8080/ws-stomp'
        topics={['/sub/chat/room/' + room.no]}
        onMessage={(msg: any) => {
          console.log('socket msg : ', msg);

          setMessage([...message, msg]);
        }}
        ref={$websocket}
      />

      <div style={{ height: '85%' }}>
        {message.map((item) => (
          <div>asd: {item.msg}</div>
        ))}
      </div>
      <div>
        <Space direction='vertical'>
          <Search placeholder='input search text' onSearch={handleClick3} style={{ width: 480 }} />
        </Space>

        {/* <input value={sendMessage} onChange={(e) => setSendMessage(e.target.value)} /> */}
      </div>
    </div>
  );
};

export default ChatList;
