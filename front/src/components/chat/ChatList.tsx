import React, { useRef, useState } from 'react';
import Socket from 'react-stomp';
import { Avatar, Input } from 'antd';
import {
  ChatListMessageListStyled,
  ChatListRoomNameStyled,
  ChatListStyled,
  ChatMsgStyled,
  ChatNameMsgStyled,
} from './style';
import { SendOutlined, UserOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../store/hooks';
import { FlexDiv } from '../../utils/CommonStyle';
import { SocketConnect } from '../../utils/utils';

const ChatList = () => {
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

  const selectedRoom = useAppSelector((state) => state.room);

  const $websocket = useRef<any>(null);

  const handleSendClick = () => {
    console.log('Asd');
    let data = {
      roomNo: selectedRoom.no, // 방번호
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
      {SocketConnect(
        selectedRoom.no,
        (msg: any) => {
          setMessage([...message, msg]);
        },
        $websocket
      )}
      <ChatListRoomNameStyled>{selectedRoom.name}</ChatListRoomNameStyled>
      <ChatListMessageListStyled>
        {message.map((item, index) => (
          <>
            <FlexDiv key={index}>
              <Avatar shape='square' size={'default'} icon={<UserOutlined />} />
              <ChatNameMsgStyled>
                <div>김정현</div>
                <ChatMsgStyled>{item.msg}</ChatMsgStyled>
              </ChatNameMsgStyled>
            </FlexDiv>
          </>
        ))}
      </ChatListMessageListStyled>

      <div>
        <Input
          value={sendMessage}
          onChange={(e) => setSendMessage(e.target.value)}
          addonAfter={<SendOutlined onClick={handleSendClick} />}
          placeholder='Basic usage'
          style={{ width: 480 }}
        />
      </div>
    </ChatListStyled>
  );
};

export default ChatList;
