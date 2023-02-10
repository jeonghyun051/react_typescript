import { useEffect } from 'react';
import Chat from './pages/chat/Chat';
import Home from './pages/Home';
import React, { useState } from 'react';
import { HomeOutlined, MessageOutlined } from '@ant-design/icons';
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
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Join from './pages/join/Join';

const { Sider } = Layout;

const App = () => {
  const [selectedKeys, setSelectedKeys] = useState(['Home']);

  useEffect(() => {}, []);

  const [collapsed, setCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <LayoutStyled>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <SiderMainStyled />
          <Menu
            theme='dark'
            selectedKeys={selectedKeys}
            defaultSelectedKeys={['Home']}
            mode='inline'
            onClick={(e) => {
              setSelectedKeys([e.key]);
            }}
          >
            <Menu.Item key='Home' icon={<HomeOutlined />}>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key='Chatting' icon={<MessageOutlined />}>
              <Link to='/chat'>Chatting</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <HeaderStyled>
            <Link to='/login'>Login</Link>&nbsp;
            <Link to='/join'>Join</Link>
          </HeaderStyled>
          <ContentStyled>
            <BreadcrumbStyled>
              <Breadcrumb.Item>{selectedKeys[0]}</Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
            </BreadcrumbStyled>
            <MainContentStyled>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='/login' element={<Login />} />
                <Route path='/join' element={<Join />} />
              </Routes>
            </MainContentStyled>
          </ContentStyled>
          <FooterStyled>@2023 KKimKao</FooterStyled>
        </Layout>
      </LayoutStyled>
    </BrowserRouter>
  );
};

export default App;
