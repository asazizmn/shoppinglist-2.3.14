import React from 'react';
import ShoppingList from './ShoppingList';



const ShoppingItem = props => (
    <li key={props.index}>{props.item}</li>
);



export default ShoppingItem;