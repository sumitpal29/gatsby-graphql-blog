import React from "react";
import Layout from "../page-components/Layout";
import { graphql } from 'gatsby';


function Posts({ data, pageContext: { slug } }) {
  return (
    <Layout>
      <section>
        <h1>{slug}</h1>
        <h2>{data.sanityPost.title}</h2>
        <>{data.sanityPost.content}</>
      </section>
    </Layout>
  );
}

export default Posts;

export const query = graphql`
  query($slug: String) {
    sanityPost(slug: {current: {eq: $slug}}) {
      title
      content
    }
  }
`;