import styled from 'styled-components';

const ChatListStyled = styled.div`
  display: blcok;
  border: 1px solid #e6e6e6;
  width: 500px; 
  height: 400px; 
  padding: 10px;
`;

const ChatListRoomNameStyled = styled.div`
  text-align: center; 
  font-size: 17px;
`

const ChatListMessageListStyled = styled.div`
  height: 85%;
`;


export { ChatListStyled, ChatListRoomNameStyled, ChatListMessageListStyled };
