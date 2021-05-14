import React from "react";
import Layout from "../page-components/Layout";

function Posts({ pageContext: { title } }) {
  return (
    <Layout>
      <section>
        <h1>{title}</h1>
      </section>
    </Layout>
  );
}

export default Posts;
