import React from 'react';
import { node } from 'prop-types';

import styles from './index.module.scss';

const Page = ({ children }) => <main className={styles.wrapper}>{children}</main>;

Page.propTypes = {
  children: node,
};

Page.defaultProps = {
  children: null,
};

export default Page;
