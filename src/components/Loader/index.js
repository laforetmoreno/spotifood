import React from 'react';
import { number, string } from 'prop-types';

import styles from './index.module.scss';

const Loader = ({ size, weight, color }) => (
  <div className={`${styles.ldsRing} ${styles.minHeight}`}>
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: `${weight}px solid #fff`,
        borderColor: `${color} transparent transparent transparent`,
      }}
    />
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: `${weight}px solid #fff`,
        borderColor: `${color} transparent transparent transparent`,
      }}
    />
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: `${weight}px solid #fff`,
        borderColor: `${color} transparent transparent transparent`,
      }}
    />
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: `${weight}px solid #fff`,
        borderColor: `${color} transparent transparent transparent`,
      }}
    />
  </div>
);

Loader.propTypes = {
  size: number,
  weight: number,
  color: string,
};

Loader.defaultProps = {
  size: 50,
  weight: 51,
  color: '#1e3264',
};

export default Loader;
