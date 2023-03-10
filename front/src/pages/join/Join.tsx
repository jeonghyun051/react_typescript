import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import { LoginStyled } from '../login/LoginStyle';
import { Link } from 'react-router-dom';
import { join } from '../../api/user/api';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Join = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    const res = await join(values);

    console.log(values);
    console.log('res', res);
  };

  console.log('join render');
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
        <Form.Item label='name' name='name' rules={[{ required: true }]} style={{ textAlign: 'left' }}>
          <Input style={{ textAlignLast: 'left' }} />
        </Form.Item>
        <Form.Item label='phone' name='phone' rules={[{ required: true }]} style={{ textAlign: 'left' }}>
          <Input style={{ textAlignLast: 'left' }} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <div style={{ display: 'flex', marginTop: '15px' }}>
            <Button type='primary' htmlType='submit'>
              회원가입
            </Button>
            <Link to={'/login'}>
              <Button htmlType='button'>로그인</Button>
            </Link>
          </div>
        </Form.Item>
      </Form>
    </LoginStyled>
  );
};

export default Join;
