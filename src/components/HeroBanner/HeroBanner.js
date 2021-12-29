import React from 'react';
import cx from 'classnames';
import { heroBanner } from './HeroBanner.module.scss';

function HeroBanner() {
  return (
    <div className={cx(heroBanner, 'container')}>
      <div className="text">
        <h1>I'm Sumit Pal</h1>
        <h2>Senior frontend engineer and a content creator</h2>
      </div>
      <div className="heroBanner"></div>
    </div>
  );
}

export default HeroBanner;
