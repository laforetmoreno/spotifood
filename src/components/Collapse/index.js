import React from 'react';
import { bool, node, func } from 'prop-types';

import arrow from 'assets/arrow.svg';

import styles from './index.module.scss';

const Collapse = ({ children, collapsed, onClick }) => (
  <>
    <div className={`${styles.wrapper} ${collapsed ? styles.active : styles.collapse}`}>
      {children}
    </div>
    <button type="button" onClick={onClick} className={styles.btn}>
      <img className={collapsed ? styles.down : undefined} alt="Arrow" src={arrow} />
    </button>
  </>
);

Collapse.propTypes = {
  children: node,
  collapsed: bool,
  onClick: func,
};

Collapse.defaultProps = {
  children: <div />,
  collapsed: false,
  onClick: () => null,
};

export default Collapse;
