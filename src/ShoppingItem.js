import React from 'react';
import PropTypes from 'prop-types';



const ShoppingItem = props => (
    <li>{props.item}</li>
);



ShoppingItem.propTypes = {
    item: PropTypes.string.isRequired
};



export default ShoppingItem;