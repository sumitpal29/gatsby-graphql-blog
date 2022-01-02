import React from 'react';
import cx from 'classnames';
import { Input, Button, Form, notification } from 'antd';
import { subscribe, contentCenter, inputBox } from './Subscribe.module.scss';

function Subscribe() {
  const handleOnFinish = (values) => {
    console.log('on finish', values);
  };

  const onFinishFailed = () => {
    notification.error({
      message: 'Invalid information given',
      description:
        'Please provide valid name and email to subscribe my weekly newsletter for free!',
    });
  };

  return (
    <div className={subscribe}>
      <div className={cx('container', contentCenter)}>
        <h2>Enjoying my posts?</h2>
        <p>Subscribe to my Sunday Snippets</p>
        <Form
          name="control-ref"
          onFinishFailed={onFinishFailed}
          onFinish={handleOnFinish}
        >
          <Input.Group compact>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please add your name',
                },
              ]}
            >
              <Input className={inputBox} placeholder="Your Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Is the above E-mail correct?',
                },
              ]}
            >
              <Input
                className={inputBox}
                style={{
                  borderLeft: '1px solid #cdcdcd',
                }}
                placeholder="Your Email"
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                style={{
                  height: '40px',
                  background: '#eaeaea',
                  color: '#843200',
                  border: 'none',
                }}
                type="primary"
              >
                SUBSCRIBE
              </Button>
            </Form.Item>
          </Input.Group>
        </Form>
      </div>
    </div>
  );
}

export default Subscribe;
