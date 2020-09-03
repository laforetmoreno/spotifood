import React from 'react';
import { string, node } from 'prop-types';

const List = ({ className, children }) => <ul className={className}>{children}</ul>;

List.propTypes = {
  className: string,
  children: node,
};

List.defaultProps = {
  className: '',
};

export default List;
