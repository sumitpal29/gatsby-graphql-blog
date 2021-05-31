import React from 'react';
import Layout from '../components/Layout';
import Contents from '../page-components/Contents';
import { graphql } from 'gatsby';

function Index({ data }) {
  return (
    <Layout>
      <div className="container">
        <h1>Sumit's blog</h1>
        <h2>Read contents</h2>
        <Contents data={data} />
      </div>
    </Layout>
  );
}

export default Index;

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
        }
      }
    }
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          description
          tags
        }
        fields {
          slug
        }
      }
    }
  }
`;
