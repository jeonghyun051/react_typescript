import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import Chat from './pages/chat/Chat';
import Home from './pages/Home';
import React, { useState } from 'react';
import { HomeOutlined, MessageOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import {
  BreadcrumbStyled,
  ContentStyled,
  FooterStyled,
  HeaderStyled,
  LayoutStyled,
  MainContentStyled,
  SiderMainStyled,
} from './style';

const { Sider } = Layout;

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

  const [selectedKeys, setSelectedKeys] = useState(['']);

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

  return (
    <LayoutStyled>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <SiderMainStyled />
        <Menu
          theme='dark'
          defaultSelectedKeys={['Home']}
          mode='inline'
          items={items}
          selectedKeys={selectedKeys}
          onClick={(e) => {
            setSelectedKeys([e.key]);
          }}
        />
      </Sider>
      <Layout className='site-layout'>
        <HeaderStyled />
        <ContentStyled>
          <BreadcrumbStyled>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item></Breadcrumb.Item>
          </BreadcrumbStyled>
          <MainContentStyled>{selectedKeys[0] === 'Chatting' ? <Chat /> : <Home />}</MainContentStyled>
        </ContentStyled>
        <FooterStyled>Ant Design ©2023 Created by Ant UED</FooterStyled>
      </Layout>
    </LayoutStyled>
  );
};

export default App;
