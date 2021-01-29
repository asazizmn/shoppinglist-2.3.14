import React from 'react';
import PropTypes from 'prop-types';


const DeleteItem = props => (
    <button onClick={props.deleteLastItem} disabled={props.noItemsFound()}>
        Delete Last Item
    </button>
);



DeleteItem.propTypes = {
    deleteLastItem: PropTypes.func.required,
    noItemsFound: PropTypes.func.required
};



export default DeleteItem;