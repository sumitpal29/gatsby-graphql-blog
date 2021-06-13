import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import { contentContainer } from '../scss/content.module.scss';

function LocalMarkdownRenderer({ data, pageContext: { slug } }) {
  return (
    <Layout>
      <div className={contentContainer}>
        <h1>{slug}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </Layout>
  );
}

export default LocalMarkdownRenderer;

export const query = graphql`
  query ($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        description
        date
      }
      timeToRead
    }
  }
`;

LocalMarkdownRenderer.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};
