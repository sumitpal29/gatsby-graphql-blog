import React from 'react';
import cx from 'classnames';
import { aboutPage, aboutPara } from './About.module.scss';

function About() {
  return (
    <section className={cx('light-bg', aboutPage)}>
      <div className={cx('flex', 'flex-space-between', 'container')}>
        <h2 className={cx('weigthed-text', 'text-brand-underline')}>
          About This Page
        </h2>
        <div className={aboutPara}>
          <p>
            In our daily life we always learn something new, so do I. On this
            site I will be posting new articles on my new learnings every week
            which will make your life easier, happier and more productive.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
