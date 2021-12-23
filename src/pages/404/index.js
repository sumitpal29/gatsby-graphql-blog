import React from 'react';

import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import cx from 'classnames';
import { contentContainer } from '../../scss/content.module.scss';
import { pageNotFound } from './page-not-found.module.scss';

function PageNotFound() {
  return (
    <Layout>
      <div className={cx(contentContainer, 'p-t-120', pageNotFound)}>
        <title>Page Not found</title>
        <h1>404</h1>
        <h2>The page you are looking for, isn&#39;t available.</h2>
        <h4 className="p-b-120">
          Please use the search feature in the navbar or <Link to="/">visit Home</Link>
        </h4>
      </div>
    </Layout>
  );
}

export default PageNotFound;
