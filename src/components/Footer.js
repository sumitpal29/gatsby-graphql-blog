import React from 'react';
import cx from 'classnames';
import {
  GithubOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';

import {
  footerContainer,
  footerTop,
  footerIcons,
  footerTopSecond,
  footerBottom,
  footerLogo,
} from '../scss/footer.module.scss';

function Footer() {
  return (
    <>
      <footer className={cx(footerContainer, 'text-light-dark')}>
        <div
          className={cx(
            footerTop,
            'container',
            'text-logo',
            'flex',
            'flex-center'
          )}
        >
          SP.
        </div>
        <p
          className={cx(
            footerTopSecond,
            'container',
            'content-secondary',
            'flex',
            'flex-center'
          )}
        >
          You&apos;r here, that means your are liking it. <br></br>
          Subsribe to my weekly cotents above and connect with me at your
          favourite place below.
          <br></br>Cheers!!!
        </p>
        <div
          className={cx(
            footerLogo,
            'container',
            'content-secondary',
            'flex',
            'flex-center'
          )}
        >
          <a href="https://github.com/sumitpal29" target="__blank">
            <GithubOutlined className={footerIcons} />
          </a>
          <a href="https://www.facebook.com/sumitpal29" target="__blank">
            <FacebookOutlined className={footerIcons} />
          </a>
          <a href="https://www.linkedin.com/in/sumitpal29" target="__blank">
            <LinkedinOutlined className={footerIcons} />
          </a>
          <a href="https://www.instagram.com/sumitpal.29" target="__blank">
            <InstagramOutlined className={footerIcons} />
          </a>
          <a href="https://www.youtube.com/c/sumitpal" target="__blank">
            <YoutubeOutlined className={footerIcons} />
          </a>
        </div>
        <span
          className={cx(
            footerBottom,
            'container',
            'content-secondary',
            'flex',
            'flex-center'
          )}
        >
          version 1.0.1 - 2022 - Sumit Pal
        </span>
      </footer>
    </>
  );
}

export default Footer;
