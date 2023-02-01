import { Button } from 'antd';
import styled from 'styled-components';

export const RoomListStyled = styled.div`
  width: 200px;
  display: flex;
  padding: 5px;
  span {
    background-color: #acc0d2;
  }
  div {
    div {
      margin-left: 10px;
    }
  }
`;

export const RoomListButtonStyled = styled(Button)`
  height: 50px;
  width: 100%;
  display: flex;
  text-align: left;
`;
