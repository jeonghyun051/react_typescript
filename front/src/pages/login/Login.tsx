import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import { LoginStyled } from './LoginStyle';
import image_kakao from '../../assets/images/kakao_login_medium_narrow.png';
import { Link } from 'react-router-dom';
import { login } from '../../api/user/api';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    const res = await login(values);

    console.log('res', res);
  };

  return (
    <LoginStyled>
      <Form
        {...layout}
        form={form}
        name='control-hooks'
        onFinish={onFinish}
        style={{ maxWidth: 400, textAlignLast: 'center' }}
      >
        <Form.Item label='ID' name='username' rules={[{ required: true }]} style={{ textAlign: 'left' }}>
          <Input style={{ textAlignLast: 'left' }} />
        </Form.Item>
        <Form.Item label='PW' name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password style={{ textAlignLast: 'left' }} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <div style={{ display: 'flex', marginTop: '15px' }}>
            <Button type='primary' htmlType='submit'>
              로그인
            </Button>
            <Link to={'/join'}>
              <Button htmlType='button'>회원가입</Button>
            </Link>
            <img src={image_kakao} width={'120px'} />
          </div>
        </Form.Item>
      </Form>
    </LoginStyled>
  );
};

export default Login;
