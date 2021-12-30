import React from 'react';
import cx from 'classnames';
import {
  heroBanner,
  heroBannerImageContainer,
  banner,
  heroBannerText,
} from './HeroBanner.module.scss';
import Hero from '../../images/Sumit_Pal_web_image.png';

function HeroBanner() {
  return (
    <div className={banner}>
      <div
        className={cx(heroBanner, 'flex', 'flex-space-between', 'container')}
      >
        <div className={heroBannerText}>
          <h1>I&apos;m Sumit Pal</h1>
          <h2>Senior frontend engineer and content creator</h2>
        </div>
        <div className={heroBannerImageContainer}>
          <img src={Hero} alt="Sumit Pal Image" />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
