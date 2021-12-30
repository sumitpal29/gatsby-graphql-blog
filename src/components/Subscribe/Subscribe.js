import React from 'react';
import cx from 'classnames';
import { Input, Button } from 'antd';
import { subscribe, contentCenter } from './Subscribe.module.scss';

function Subscribe() {
  return (
    <div className={subscribe}>
      <div className={cx('container', contentCenter)}>
        <h2>Enjoying my posts?</h2>
        <div>
          <Input.Group
            compact
            style={{ borderRadius: '8px', overflow: 'hidden' }}
          >
            <Input
              style={{ width: '400px', height: '40px', border: 'none' }}
              placeholder="Your Email"
            />
            <Button
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
          </Input.Group>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
