import React from 'react';
import { node } from 'prop-types';

import styles from './index.module.scss';

const Page = ({ children }) => <div className={styles.wrapper}>{children}</div>;

Page.propTypes = {
  children: node,
};

Page.defaultProps = {
  children: null,
};

export default Page;
