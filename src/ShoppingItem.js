import React from 'react';
import PropTypes from 'prop-types';



const ShoppingItem = props => (
    <li key={props.index}>{props.item}</li>
);



ShoppingItem.propTypes = {
    index: PropTypes.number.isRequired,
    item: PropTypes.string.isRequired
};



export default ShoppingItem;