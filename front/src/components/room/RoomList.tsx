import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { RoomListButtonStyled, RoomListStyled } from './style';

type RoomListProps = {
  room: {
    no: string;
    name: string;
  };
};

const RoomList = ({ room }: RoomListProps) => {
  const handleRoomClick = (no: string) => {
    console.log(no);
  };

  return (
    <>
      <RoomListStyled>
        {/* <Button style={{ height: '50px', width: '100%', display: 'flex', textAlign: 'left' }}> */}
        <RoomListButtonStyled onClick={() => handleRoomClick(room.no)}>
          <Avatar shape='square' size={40} icon={<UserOutlined />} />
          <div>
            <div>{room.name}</div>
            <div>123</div>
          </div>
        </RoomListButtonStyled>
      </RoomListStyled>
    </>
  );
};

export default RoomList;
