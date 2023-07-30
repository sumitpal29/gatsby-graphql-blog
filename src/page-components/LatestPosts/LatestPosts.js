import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import _map from 'lodash/map';
import _toUpper from 'lodash/toUpper';
import { Link } from 'gatsby';
import { Card, Tag, Tooltip } from 'antd';
import { sectionBasic, latestPosts } from '../../scss/content.module.scss';
import { EMPTY_ARRAY, EMPTY_STRING } from '../../constants/base';
import {
  linkCard,
  cardContent,
  readMore,
  cardList,
} from './LatestPosts.module.scss';

// responsible for loading all the contents
function LatestPosts({ contents }) {
  return (
    <section className={cx(sectionBasic, latestPosts)}>
      <h2 className="text-brand-underline">Have you read?</h2>

      <div className={cx('container', 'flex')}>
        {_map(contents, (content, index) => {
          const { categories, _createdAt, slug, title } = content;

          return (
            <Link
              className={linkCard}
              to={`posts/${_get(slug, 'current', EMPTY_STRING)}`}
            >
              <Tooltip
                title={title}
                color="#f5c130"
                key={`posts/${_get(slug, 'current', EMPTY_STRING)}`}
              >
                <Card
                  className="m-t-12 m-b-12 equal-card"
                  hoverable
                  key={index}
                  title={title}
                >
                  <ul className={cardContent}>
                    <li className={cardList}>
                      {_map(categories, (tag) => {
                        const title = _get(tag, 'title');
                        const colorHexCode = _get(tag, 'colorHexCode', '#ccc');

                        return (
                          <Tag color={colorHexCode} key={title}>
                            {_toUpper(title)}
                          </Tag>
                        );
                      })}
                    </li>
                    <li className={cardList}>published: {_createdAt}</li>
                    <li className={readMore}>read more</li>
                  </ul>
                </Card>
              </Tooltip>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default LatestPosts;

LatestPosts.propTypes = {
  contents: PropTypes.object,
};

LatestPosts.defaultProps = {
  contents: EMPTY_ARRAY,
};
