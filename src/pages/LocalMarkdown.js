import React from "react";
import _get from 'lodash/get'
import { graphql } from "gatsby";
import Layout from '../page-components/Layout';

function LocalMarkdown( { data } ) {
  const content = _get(data, 'allMarkdownRemark.nodes[0]', {});
  const { tags, title, date } = _get(content, 'frontmatter');
  return <Layout>
    <div>{title}</div>
  </Layout>;
}

export default LocalMarkdown;

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          tags
          title
          description
          date
        }
        timeToRead
      }
    }
  }
`;
