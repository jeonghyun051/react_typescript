import styled from 'styled-components';
import { Breadcrumb, Layout } from 'antd';
const { Header, Content, Footer } = Layout;
// const {
//   token: { colorBgContainer },
// } = theme.useToken();

const colorBgContainer = 'white';

export const LayoutStyled = styled(Layout)`
  min-height: 100vh;
`;
export const SiderMainStyled = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.2);
`;

export const HeaderStyled = styled(Header)`
  padding: 0px;
  background: ${colorBgContainer} !important;
`;

export const ContentStyled = styled(Content)`
  margin: 0px 16px;
`;

export const BreadcrumbStyled = styled(Breadcrumb)`
  margin: 16px 0px;
`;

export const MainContentStyled = styled.div`
  padding: 24px;
  min-height: 360px;
  background: ${colorBgContainer};
`;

export const FooterStyled = styled(Footer)`
  text-align: center;
`;
