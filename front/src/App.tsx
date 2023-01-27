import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { loadMyInfo, setUser } from './store/slice/userSlice';
import StompJs from '@stomp/stompjs';
import Socket from 'react-stomp';
import axios from 'axios';
import { config } from 'process';

const App = () => {
  const { name, phone, id } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const $websocket = useRef<any>(null);

  useEffect(() => {}, []);

  const handleClick = () => {
    let data = {
      id: '1',
      name: 'kjh',
      phone: '010',
    };
    // dispatch(setUser(data));
  };

  const handleClick2 = () => {
    let data = {
      id: '2',
      name: 'kjh2',
      phone: '0102',
    };
    dispatch(loadMyInfo(data));
  };

  const handleClick3 = () => {
    let data = {
      roomKey: 'abc', // 방번호
      userName: 'k', // 유저이름
      userNo: '0', // 유저번호
      msg: 'ms', // 메세지
      dateTime: '2021', // 전송시간
      type: 'user',
    };

    // axios.get('http://localhost:8080/getSocket').then((res) => console.log('apiRes : ', res));
    // axios.post('http://localhost:8080/getSocket', data).then((res) => console.log('apiRes : ', res));
    $websocket.current.sendMessage('/pub/chat/message', JSON.stringify(data));
  };

  return (
    <>
      <Socket
        url='http://localhost:8080/ws-stomp'
        topics={['/sub/chat/room/abc']}
        onMessage={(msg: any) => {
          console.log('socket msg : ', msg);
        }}
        ref={$websocket}
      />

      <div>name : {name}</div>
      <div>phone : {phone}</div>
      <div>id : {id}</div>
      <button onClick={handleClick}>button</button>
      <button onClick={handleClick2}>button2</button>
      <button onClick={handleClick3}>socket</button>
    </>
  );
};

export default App;
