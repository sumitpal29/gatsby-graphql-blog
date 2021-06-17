import React from 'react';
import _get from 'lodash/get';
import _map from 'lodash/map';
import { Card } from 'antd';

const { Meta } = Card;

function AssociateLinks({ links }) {
  return _map(links, (associateProduct) => (
    <a href={_get(associateProduct, 'link', '#')} target="_blank">
      <Card
        hoverable
        style={{ width: 240, borderRadius: '6px' }}
        cover={
          <img
            alt={_get(associateProduct, 'title', '')}
            src={_get(associateProduct, 'imageUrl', '')}
          />
        }
      >
        <Meta
          title={_get(associateProduct, 'title', '')}
          description={_get(associateProduct, 'description', '')}
        />
      </Card>
    </a>
  ));
}

export default AssociateLinks;
