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

                        // pls note that this IS where `key` should be specified
                        key={index}
                        item={item}
                    />

                    // <li key={index}>{item}</li>

                ))
            }
        </ol>
    </React.Fragment>
);



ShoppingItems.propTypes = {
    items: PropTypes.array.isRequired
};



export default ShoppingItems;