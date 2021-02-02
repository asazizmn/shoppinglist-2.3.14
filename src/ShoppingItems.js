import React from 'react';
import PropTypes from 'prop-types';

import ShoppingItem from './ShoppingItem';



const ShoppingItems = props => (
    <React.Fragment>
        <p className="items">Items</p>
        <ol className="item-list">
            {
                props.items.map((item, index) => (
                    <ShoppingItem
                        index={index}
                        item={item}
                    />
                ))
            }
        </ol>
    </React.Fragment>
);



ShoppingItems.propTypes = {
    items: PropTypes.array.isRequired
};



export default ShoppingItems;