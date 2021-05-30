import React from 'react'
import { graphql } from 'gatsby';

function LocalMarkdownRenderer({ data, pageContext: { slug } }) {
    return (
        <div>
            <h1>{slug}</h1>
            <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
        </div>
    )
}

export default LocalMarkdownRenderer

export const query = graphql`
    query($slug: String) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
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
