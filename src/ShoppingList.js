import React from 'react';

import AddItem from './AddItem';
import DeleteItem from './DeleteItem';
import DisplayItems from './DisplayItems';



const ShoppingList = props => (
    <React.Fragment>
        <h2>Shopping List</h2>

        <AddItem
            addItem={props.addItem}
            value={props.value}
            handleChange={props.handleChange}
            inputIsEmpty={props.inputIsEmpty}
        />

        <DeleteItem
            deleteLastItem={props.deleteLastItem}
            noItemsFound={props.noItemsFound}
        />

        <DisplayItems
            items={props.items}
        />
    </React.Fragment>
);



export default ShoppingList;