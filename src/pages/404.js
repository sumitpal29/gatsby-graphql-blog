import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import cx from 'classnames';
import { contentContainer } from '../scss/content.module.scss';

function PageNotFound() {
  return (
    <Layout>
      <div className={cx(contentContainer, 'p-t-120')}>
        <title>Page Not found</title>
        <h1>I am not sure what you are looking for!!</h1>
        <h4>
          Please use the search feature below or
          <Link to="/">visit Home</Link>
        </h4>
      </div>
    </Layout>
  );
}

export default PageNotFound;
