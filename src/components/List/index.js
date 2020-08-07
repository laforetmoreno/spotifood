import React from 'react';
import { array } from 'prop-types';

import Card from '../Card';

import styles from './index.module.scss';

const List = ({ data }) => (
  <ul className={styles.wrapper}>
    {data?.map(item => (
      <Card
        key={item.description}
        description={item.description}
        image={item.images[0].url}
        link={item?.external_urls?.spotify}
      />
    ))}
  </ul>
);

List.propTypes = {
  data: array,
};

List.defaultProps = {
  data: [],
};

export default List;
