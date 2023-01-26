import { useAppDispatch, useAppSelector } from './store/hooks';
import { setUser } from './store/slice/userSlice';

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

  return (
    <>
      <div>name : {name}</div>
      <div>phone : {phone}</div>
      <div>id : {id}</div>
      <button onClick={handleClick}>button</button>
    </>
  );
};

export default App;
