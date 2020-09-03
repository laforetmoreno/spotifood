import React from 'react';
import { array } from 'prop-types';

import Card from '../Card';
import List from '../List';
import Empty from '../Empty';

import styles from './index.module.scss';

const ListCards = ({ data }) => {
  if (data.length > 0) {
    return (
      <List className={styles.wrapper}>
        {data?.map(item => (
          <Card
            key={item.description}
            description={item.description}
            image={item.images[0].url}
            link={item?.external_urls?.spotify}
          />
        ))}
      </List>
    );
  }

  return <Empty className={styles.empty} />;
};

ListCards.propTypes = {
  data: array.isRequired,
};

export default ListCards;
