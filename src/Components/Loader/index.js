import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

const Loader = ({ size, text }) => <Spin className="loading-spinner" size={size} tip={text} />;

Loader.defaultProps = {
  size: 'middle',
  text: 'Loading...',
};

Loader.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
};

export default Loader;
