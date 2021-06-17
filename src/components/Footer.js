import React from 'react';
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
} from '../scss/footer.module.scss';

function Footer() {
  return (
    <>
      <div className={footerTop}>
        <img src="https://i.imgur.com/2FkwOg6.png" alt="sumitpal.in" />
      </div>
      <footer className={footerContainer}>
        <div>
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
        <span>© 2021 Sumit Pal</span>
      </footer>
    </>
  );
}

export default Footer;
