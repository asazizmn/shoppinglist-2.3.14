import React, { Component } from 'react';

import AddItem from './AddItem';
import DeleteItem from './DeleteItem';
import ShoppingItems from './ShoppingItems';



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

        // please note that 'negative' values count from the end of the array
        // so in this case 'slice(0, -1)' means that select everything until, but not including, the last item
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

                <ShoppingItems
                    items={this.state.items}
                />
            </React.Fragment>
        )
    }
}



export default ShoppingList;