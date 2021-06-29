import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import _map from 'lodash/map';
import _toUpper from 'lodash/toUpper';
import { Link } from 'gatsby';
import { Card, Tag } from 'antd';

// responsible for loading all the contents
function Contents({ cmsContents }) {
  return (
    <div className="content-renderer">
      {_map(cmsContents, (content, index) => {
        const { categories, _createdAt, slug, title } = content;

        return (
          <Card className="m-t-12 m-b-12" hoverable key={index} title={title}>
            {_map(categories, (tag) => {
              const title = _get(tag, 'title');
              const colorHexCode = _get(tag, 'colorHexCode', '#ccc');

              return (
                <Tag color={colorHexCode} key={title}>
                  {_toUpper(title)}
                </Tag>
              );
            })}
            <span>published:{_createdAt}</span> <br />
            <Link to={`posts/${_get(slug, 'current', '')}`}>read more</Link>
          </Card>
        );
      })}
    </div>
  );
}

export default Contents;

Contents.propTypes = {
  cmsContents: PropTypes.object.isRequired,
};
