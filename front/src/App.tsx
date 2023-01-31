import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';
import { loadMyInfo, setUser } from './store/slice/userSlice';
import Chat from './pages/chat/Chat';
import Home from './pages/Home';
import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  MessageOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  getItem('Home', 'Home', <HomeOutlined />),
  getItem('Chatting', 'Chatting', <MessageOutlined />),

  //   getItem('User', 'sub1', <UserOutlined />, [getItem('Tom', '3'), getItem('Bill', '4'), getItem('Alex', '5')]),
  //   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  //   getItem('Files', '9', <FileOutlined />),
];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const App = () => {
  const { name, phone, id } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {}, []);

  // const handleClick = () => {
  //   let data = {
  //     id: '1',
  //     name: 'kjh',
  //     phone: '010',
  //   };
  //   // dispatch(setUser(data));
  // };

  // const handleClick2 = () => {
  //   let data = {
  //     id: '2',
  //     name: 'kjh2',
  //     phone: '0102',
  //   };
  //   dispatch(loadMyInfo(data));
  // };

  {
    /* <div>name : {name}</div>
      <div>phone : {phone}</div>
      <div>id : {id}</div>
      <button onClick={handleClick}>button</button>
      <button onClick={handleClick2}>button2</button> */
  }
  // <Home />

  {
    /* <Chat /> */
  }

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }}></div>
          <Menu
            theme='dark'
            defaultSelectedKeys={['Home']}
            mode='inline'
            items={items}
            onClick={(e) => {
              window.location.href = '/Chatting';
            }}
          />
        </Sider>
        <Layout className='site-layout'>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
              <Routes>
                <Route path='/' element={<Chat />} />
                <Route path='/Chatting' element={<Chat />} />
                {/* <PublicRoute restricted={true} element={Home} path='/' exact={true} />
      <PrivateRoute component={Home} path='/Home' exact={true} admin={undefined} /> */}

                {/* <LogoutRoute component={Home} path="/logout" exact={true} /> */}

                {/* 매칭되는 페이지가 없을 때 실행됨 switch가 있기에 가능 */}
                {/* <Route component={Home} /> */}
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
