import React, { useState, useEffect, lazy, Suspense } from 'react';
import { HomeOutlined, MessageOutlined } from '@ant-design/icons';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
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
import { User } from './types';

import { useAppDispatch, useAppSelector } from './store/hooks';
import { resetUser } from './store/slice/userSlice';

const Home = lazy(() => import('./pages/Home'));
const Join = lazy(() => import('./pages/join/Join'));
const Chat = lazy(() => import('./pages/chat/Chat'));
const Login = lazy(() => import('./pages/login/Login'));

const { Sider } = Layout;

const App = () => {
  const [selectedKeys, setSelectedKeys] = useState(['Home']);
  const [collapsed, setCollapsed] = useState(false);

  const loginUser = useAppSelector<User>((state) => state.user);
  const dispatch = useAppDispatch();

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
            {loginUser.isLogin ? (
              <Link
                onClick={() => {
                  sessionStorage.removeItem('userNo');
                  dispatch(resetUser(''));
                  // navigate('/login')
                }}
                to='/login'
              >
                Logout
              </Link>
            ) : (
              <Link to='/login'>Login</Link>
            )}
            &nbsp;<Link to='/join'>Join</Link>&nbsp;
          </HeaderStyled>
          <ContentStyled>
            <BreadcrumbStyled>
              <Breadcrumb.Item>{selectedKeys[0]}</Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
            </BreadcrumbStyled>
            <MainContentStyled>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/chat' element={<Chat />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/join' element={<Join />} />
                </Routes>
              </Suspense>
            </MainContentStyled>
          </ContentStyled>
          <FooterStyled>@2023 KKimKao</FooterStyled>
        </Layout>
      </LayoutStyled>
    </BrowserRouter>
  );
};

export default App;
