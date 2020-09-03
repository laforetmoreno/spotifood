import React from 'react';
import { string } from 'prop-types';

const Empty = ({ message, className }) => <p className={className}>{message}</p>;

Empty.propTypes = {
  message: string,
  className: string,
};

Empty.defaultProps = {
  message: 'Ops, no results.',
  className: '',
};

export default Empty;
