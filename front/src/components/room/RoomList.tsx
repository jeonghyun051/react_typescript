import React, { useEffect, useRef, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Tooltip } from 'antd';
import { RoomListButtonStyled, RoomListStyled } from './RoomListStyle';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setRoom } from '../../store/slice/roomSlice';
import { SocketConnect } from '../../util/utils';
import { Room, Message } from '../../types';

type RoomListProps = {
  room: {
    no: string;
    name: string;
  };
};

const RoomList = ({ room }: RoomListProps) => {
  const selectedRoom = useAppSelector<Room>((state) => state.room);
  const dispatch = useAppDispatch();
  const $websocket = useRef<any>(null);

  const [message, setMessage] = useState<Message | null>();

  const handleRoomClick = (room: Room) => {
    dispatch(setRoom(room));
  };

  return (
    <>
      <RoomListStyled>
        {SocketConnect(
          room.no,
          (msg: any) => {
            setMessage(msg);
          },
          $websocket
        )}
        <RoomListButtonStyled onClick={() => handleRoomClick(room)}>
          <Badge count={5} offset={[180, 25]}>
            <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
              {/* <Avatar src='https://joeschmoe.io/api/v1/random' /> */}
              <Avatar size={'default'} icon={<UserOutlined />} />
              {/* <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
              <Tooltip title='Ant User' placement='top'>
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
              </Tooltip> */}
              <Avatar size={'default'} icon={<UserOutlined />} />
            </Avatar.Group>

            {/* <Avatar shape='square' size={40} icon={<UserOutlined />} /> */}
          </Badge>
          <div style={{ width: '100px' }}>
            <div>{room.name}</div>
            <div>{message?.msg}</div>
          </div>
        </RoomListButtonStyled>
      </RoomListStyled>
    </>
  );
};

export default RoomList;
