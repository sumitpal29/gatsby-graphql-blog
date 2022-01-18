import React from 'react';
import cx from 'classnames';
import Layout from '../../components/Layout';
import { overview } from './about.module.scss';

function About() {
  return (
    <Layout>
      <div className="">
        <section className={overview}>
          <div className="flex flex-column container">
            <h1 className="weigthed-text text-brand-underline-middle">
              About Sumit
            </h1>
            <p className="para-style-grey">
              I am a software engineer (specialized in Frontend Technologies)
              based on Bengaluru, India. Currently I am at my hometown, living
              life like old good days, it gave me the opportunity to work under
              lap of nature, get inspired from surroundings, it helped me to see
              and solve problems in different ways. I like creating intuitive
              web apps by combining the art of design with the art of
              programming that seamlessly integrate into our lives.
            </p>
            <p className="para-style-grey">
              Other than this, I like to create contents that can help others,
              write blogs, learn new things & share with you all, and my
              favourite hobbies are photography and cinematography.
            </p>
          </div>
        </section>
        <section>
          <h2>What I do?</h2>
        </section>
        <section>
          <h2>Work Experience</h2>
          <p>basic info</p>
          <span>Download my resume</span>
        </section>
      </div>
    </Layout>
  );
}

export default About;
