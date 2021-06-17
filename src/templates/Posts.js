import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import _get from 'lodash/get';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import { Tag, Divider } from 'antd';
import cx from 'classnames';
import Layout from '../components/Layout';
import AssociateLinks from '../components/AssociateLinks';
import { contentContainer } from '../scss/content.module.scss';
import { contentH1 } from '../scss/content.module.scss';

function Posts({ data }) {
  const markdownContent = _get(data, 'sanityPost.content', '');
  const imageUrl = _get(data, 'sanityPost.imageUrl', '');
  const postTitle = _get(data, 'sanityPost.title', '');
  const externalLinks = _get(data, 'sanityPost.externalLinks', []);
  const tags = _get(data, 'sanityPost.categories', []);

  return (
    <Layout>
      <div className={contentContainer}>
        <img style={{ width: '100%' }} src={imageUrl} />
        {!_isEmpty(tags) &&
          _map(tags, (tag) => (
            <Tag color={_get(tag, 'colorHexCode', '#ccc')}>
              {_get(tag, 'title', '')}
            </Tag>
          ))}
        <h1 className={cx('m-b-24 p-t-30', contentH1)}>{postTitle}</h1>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
        <Divider />
        {!_isEmpty(externalLinks) && (
          <div>
            <h2 className="m-b-30 p-t-48">Related items are available here</h2>
            <AssociateLinks links={externalLinks} />
          </div>
        )}
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
      externalLinks {
        title
        link
        description
        imageUrl
      }
      categories {
        title
        colorHexCode
      }
      imageUrl
    }
  }
`;

Posts.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};
