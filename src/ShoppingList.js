import React, { Component } from 'react';

import AddItem from './AddItem';
import DeleteItem from './DeleteItem';
import DisplayItems from './DisplayItems';



class ShoppingList extends Component {

    state = {
        items: []
    };


    addItem = item => {
        this.setState(oldState => ({

            // utilising the spread operator to ensure old items are preserved
            // ... and not overwritten
            items: [...oldState.items, item]
        }));
    };


    deleteLastItem = event => {
        this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
    };


    noItemsFound = () => {
        return this.state.items.length === 0;
    };


    render() {
        return (
            <React.Fragment>
                <h2>Shopping List</h2>

                <AddItem
                    addItem={this.addItem}
                />

                <DeleteItem
                    deleteLastItem={this.deleteLastItem}
                    noItemsFound={this.noItemsFound}
                />

                <DisplayItems
                    items={this.state.items}
                />
            </React.Fragment>
        )
    }
}



export default ShoppingList;