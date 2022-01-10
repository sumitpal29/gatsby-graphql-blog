import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import Layout from '../components/Layout';
import LatestPosts from '../page-components/LatestPosts';
import { graphql } from 'gatsby';
import HeroBanner from '../components/HeroBanner';
import About from '../components/About';

function Home({ data }) {
  const cmsContents = _get(data, 'allSanityPost.nodes', []);

  return (
    <Layout>
      <HeroBanner />
      <About />
      <LatestPosts contents={cmsContents} />
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
