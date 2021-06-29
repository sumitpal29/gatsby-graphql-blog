import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import Layout from '../components/Layout';
import CMSContentListRenderer from '../page-components/CMSContentListRenderer';
import { contentContainer } from '../scss/content.module.scss';
import { graphql } from 'gatsby';

function Home({ data }) {
  const cmsContents = _get(data, 'allSanityPost.nodes', []);

  return (
    <Layout>
      <div className={cx(contentContainer, 'p-t-90')}>
        <h1>{`Sumit's blog`}</h1>
        <h2>Read contents</h2>
        <CMSContentListRenderer cmsContents={cmsContents} />
      </div>
    </Layout>
  );
}

export default Home;

export const query = graphql`
  query {
    allSanityPost {
      nodes {
        title
        slug {
          current
        }
        publishedAt
        categories {
          title
          colorHexCode
        }
        _createdAt(fromNow: true)
      }
    }
  }
`;

Home.propTypes = {
  data: PropTypes.object.isRequired,
};
