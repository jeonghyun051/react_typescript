import { Button } from 'antd';
import styled from 'styled-components';

export const ChatStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const ChatRoomListStyled = styled.div`
  text-align: -webkit-center;
  width: 310px;
  height: 400px;
  margin-left: 10px;
  background: #f5f5f5;
  border: 1px solid #e6e6e6;
`;

export const ChatRoomListDivStyled = styled.div`
  overflow: auto;
  height: 350px;
`;

export const ButtonStyled = styled(Button)`
  width: 290px;
  margin: 5px;
  margin-top: 5px;
`;
