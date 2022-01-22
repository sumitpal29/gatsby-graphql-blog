import React from 'react';
import cx from 'classnames';
import Layout from '../../components/Layout';
import Button from '../../components/ButtonPrimary';
import Pdf from '../../assets/resume_Sumit_Pal_2022.pdf';
import {
  overview,
  experience,
  card,
  downloadButton,
} from './about.module.scss';

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
        <section className={experience}>
          <div className="flex flex-column container">
            <h2 className="weigthed-text text-brand-underline-middle header-h2">
              Professional Experience
            </h2>
            <div className={card}>
              <div className="flex flex-space-between">
                <h3 className="header-h3 m-b-0">Tekion Corp.</h3>
                <span className="header-h5 color-defused">
                  SSE | Aug 2020 - Present
                </span>
              </div>
              <p className="header-h5 m-t-12 p-b-12">
                The First & Fastest Cloud-Native Automotive Retail Platform.
              </p>
              <ul>
                <li className="para">
                  <b>Rule Engine</b> - Intuitive app that gives users the
                  ability to create complex rules which are a combination of
                  different actions and conditions, and can be triggered
                  manually or automatically when required. Took ownership and
                  build the product from scratch with React, Redux, D3, and
                  other custom wrote UI interaction logics
                </li>
              </ul>
            </div>
            <div className={cx(card, 'm-t-36')}>
              <div className="flex flex-space-between">
                <h3 className="header-h3 m-b-0">FusionCharts</h3>
                <span className="header-h5 color-defused">
                  Associate Team Lead - SE | July 2016 - Aug 2020
                </span>
              </div>
              <p className="header-h5 m-t-12 p-b-12">
                FusionCharts provides JavaScript charting library for web and
                enterprise applications across globe.
              </p>
              <ul>
                <li className="para">
                  <b>Web Apps</b> - Frontend architecture and migration of
                  FusionCharts web apps from PHP to NodeJs with VueJs SSR.
                  Achieved high performance, improved SEO, accessibility, and
                  browser compatibility.
                </li>
                <li className="para">
                  <b>Design System</b> - Build a custom design system for
                  FusionCharts from scratch to create a consistent experience
                  across different apps, which allowed developers and designers
                  to reuse design components.
                </li>
                <li className="para">
                  <b>Visual Regression</b> - A visual comparison test to compare
                  design changes between new and old pages, to deliver seamless
                  and pixel- perfect deployments.
                </li>
                <li className="para">
                  <b>Fusion Store</b> - Contributed and maintained to this
                  internal tool like jsFiddle where one can create and store
                  charts.
                </li>
              </ul>
            </div>

            <a href={Pdf} without rel="noopener noreferrer" target="_blank">
              <Button customClassNames={downloadButton}>View my resume</Button>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default About;
