import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import _get from 'lodash/get';
import cx from 'classnames';
import Layout from '../components/Layout';
import { contentContainer } from '../scss/content.module.scss';
import { contentH1 } from '../scss/content.module.scss';

function Posts({ data }) {
  const markdownContent = _get(data, 'sanityPost.content', '');
  const postTitle = _get(data, 'sanityPost.title', '');
  return (
    <Layout>
      <div className={contentContainer}>
        <h1 className={cx('m-b-24', contentH1)}>{postTitle}</h1>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </Layout>
  );
}

export default Posts;

export const query = graphql`
  query ($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      content
    }
  }
`;

Posts.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};
