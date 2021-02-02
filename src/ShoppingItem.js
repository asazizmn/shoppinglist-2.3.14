import React from 'react';
import PropTypes from 'prop-types';



const ShoppingItem = props => (

    // pls note that this is NOT where `key` should be specified
    // ... when dealing with component based lists
    <li>{props.item}</li>
);



ShoppingItem.propTypes = {
    item: PropTypes.string.isRequired
};



export default ShoppingItem;