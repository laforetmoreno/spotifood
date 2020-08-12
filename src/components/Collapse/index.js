/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
import { node } from 'prop-types';

import filter from 'assets/filter.svg';

import styles from './index.module.scss';

const Collapse = ({ children }) => {
  /* eslint-disable-next-line */
  const [renderChildren, setRenderChildren] = useState(false);
  const { getToggleProps, getCollapseProps, isExpanded } = useCollapse({
    defaultExpanded: true,
    onExpandStart() {
      setRenderChildren(true);
    },
    onCollapseEnd() {
      setRenderChildren(false);
    },
  });

  return (
    <>
      <button
        {...getToggleProps({ style: { display: 'block' } })}
        type="button"
        className={styles.btn}
      >
        <img className={isExpanded ? undefined : styles.down} alt="Filter" src={filter} />
      </button>
      <div {...getCollapseProps()}>{children}</div>
    </>
  );
};

Collapse.propTypes = {
  children: node,
};

Collapse.defaultProps = {
  children: <div />,
};

export default Collapse;
