import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { RoomListStyled } from './style';

type RoomListProps = {
  room: {
    no: string;
    name: string;
  };
};

const RoomList = ({ room }: RoomListProps) => {
  return (
    <>
      <RoomListStyled>
        <Avatar shape='square' size={40} icon={<UserOutlined />} />
        <div>
          <div>{room.name}</div>
          <div></div>
        </div>
      </RoomListStyled>
    </>
  );
};

export default RoomList;
