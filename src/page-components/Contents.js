import React from 'react';
import _get from 'lodash/get';
import _map from 'lodash/map';
import { Link } from 'gatsby';

// responsible for loading all the contents
function Contents({ data }) {
  const localContents = _get(data, 'allMarkdownRemark.nodes', []);

  return (
    <div className="container">
      {_map(localContents, (localContent, index) => {
        const { tags, title, description, slug } = _get(
          localContent,
          'frontmatter',
          {}
        );

        return (
          <div key={index}>
            <h3>{title}</h3>
            <h4>{tags}</h4>
            <h5>{description}</h5>
            <Link to={`posts/${slug}`}>read more</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Contents;
