import { useAppDispatch, useAppSelector } from './store/hooks';
import { loadMyInfo, setUser } from './store/slice/userSlice';

const App = () => {
  const { name, phone, id } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    let data = {
      id: '1',
      name: 'kjh',
      phone: '010',
    };
    dispatch(setUser(data));
  };

  const handleClick2 = () => {
    let data = {
      id: '2',
      name: 'kjh2',
      phone: '0102',
    };
    dispatch(loadMyInfo(data));
  };

  return (
    <>
      <div>name : {name}</div>
      <div>phone : {phone}</div>
      <div>id : {id}</div>
      <button onClick={handleClick}>button</button>
      <button onClick={handleClick2}>button2</button>
    </>
  );
};

export default App;
