import React, { useCallback, useEffect, useRef, useState } from 'react';
import Socket from 'react-stomp';
import { Avatar, Input } from 'antd';
import {
  ChatListMessageListStyled,
  ChatListRoomNameStyled,
  ChatListStyled,
  ChatMsgStyled,
  ChatNameMsgStyled,
} from './ChatListStyle';
import { SendOutlined, UserOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../store/hooks';
import { FlexDiv } from '../../utils/CommonStyle';
import { isNullOrUndefined, SocketConnect } from '../../utils/utils';
import { getChat } from '../../api/chat/api';
import { Message, Room } from '../../types';

const ChatList = () => {
  const [sendMessage, setSendMessage] = useState<string>('');

  const [message, setMessage] = useState<Message[]>([]);

  const selectedRoom = useAppSelector<Room>((state) => state.room);

  const [isSelectedRoom, setIsSelectedRoom] = useState<boolean>(true);

  const $websocket = useRef<any>(null);
  const scrollRef = useRef<any>();

  useEffect(() => {
    if (isNullOrUndefined(selectedRoom.no)) {
      setIsSelectedRoom(true);
      return;
    }

    setIsSelectedRoom(false);
    async function init() {
      const res = await getChat(selectedRoom);
      setMessage(res.data);
    }

    init();

    // setMessage(res);
  }, [selectedRoom]);

  useEffect(() => {
    // scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    if (isNullOrUndefined(selectedRoom.no)) {
      return;
    }
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [message, selectedRoom]);

  const handleSendClick = async () => {
    if (isSelectedRoom || sendMessage === '') {
      return;
    }

    let data = {
      roomNo: selectedRoom.no, // 방번호
      userName: '김정현', // 유저이름
      userNo: '0', // 유저번호
      msg: sendMessage, // 메세지
      dateTime: '2021', // 전송시간
      type: 'user',
    };
    //
    // axios.post('http://localhost:8080/getSocket', data).then((res) => console.log('apiRes : ', res));

    await $websocket.current.sendMessage('/pub/chat/message', JSON.stringify(data));
    setSendMessage('');
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
      <ChatListRoomNameStyled>
        {selectedRoom.name === '' ? '채팅방을 선택해주세요.' : selectedRoom.name}
      </ChatListRoomNameStyled>
      <ChatListMessageListStyled ref={scrollRef}>
        {message.map((item) => (
          <>
            <FlexDiv key={item.roomNo}>
              <Avatar shape='square' size={'default'} icon={<UserOutlined />} />
              <ChatNameMsgStyled>
                <div>{item.userName}</div>
                <ChatMsgStyled>{item.msg}</ChatMsgStyled>
              </ChatNameMsgStyled>
            </FlexDiv>
            {/* <FlexDiv key={index} style={{ justifyContent: 'right' }}>
              <ChatNameMsgStyled>
                <ChatMsgStyled>{item.msg}</ChatMsgStyled>
              </ChatNameMsgStyled>
            </FlexDiv> */}
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
          readOnly={isSelectedRoom}
          // onKeyUp 은 한글 두번 입력 이슈 있음
          onKeyPress={(e: any) => {
            if (e.key === 'Enter') {
              handleSendClick();
            }
          }}
        />
      </div>
    </ChatListStyled>
  );
};

export default ChatList;
