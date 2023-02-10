import { Button } from 'antd';
import { FlexDiv } from 'src/utils/CommonStyle';
import styled from 'styled-components';

export const RoomListStyled = styled(FlexDiv)`
  width: 300px;
  display: flex;
  padding: 5px;
  div {
    div {
      margin-left: 10px;
    }
  }
`;

export const RoomListButtonStyled = styled(Button)`
  padding: 5px;
  height: 50px;
  width: 100%;
  display: flex;
  text-align: left;
  .ant-avatar-group {
    width: 70px;
    justify-content: center;
  }
`;
