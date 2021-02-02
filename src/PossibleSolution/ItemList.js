import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';



/*
This presentational component can just be a Stateless Functional Component.
*/
const ItemList = props => {
  return (
    <div>
      <p className="items">Items</p>
      <ol className="item">{props.items.map((item, index) => <Item key={index} item={item} />)}</ol>
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;
