import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from 'antd';
import _noop from 'lodash/noop';
import { EMPTY_OBJECT } from '../../constants/base';
import { primary } from './ButtonPrimary.module.scss';

const CustomButton = (props) => {
  const { onClick, customClassNames, type, children } = props;

  return (
    <Button
      type={type}
      onClick={onClick}
      className={cx(customClassNames, primary)}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

CustomButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  customClassNames: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

CustomButton.defaultProps = {
  onClick: _noop,
  type: 'primary',
  customClassNames: EMPTY_OBJECT,
};
