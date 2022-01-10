import React from 'react';
import Layout from '../../components/Layout';

function About() {
  return (
    <Layout>
      <div className="container">
        <section className='overview'>
          <h1>About Sumit</h1>
          <p>some overview of my profile</p>
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
