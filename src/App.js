import React from 'react';
import logo from './logo.svg';
import './App.css';

import TopHeader from './TopHeader';
import ShoppingList from './ShoppingList';



class App extends React.Component {
  
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
      <div className="App">

        <TopHeader
          logo={logo}
          title={'ReactND - Coding Practice'}
        />

        <ShoppingList
          addItem={this.addItem}
          // value={this.state.value}
          // handleChange={this.handleChange}
          // inputIsEmpty={this.inputIsEmpty}
          deleteLastItem={this.deleteLastItem}
          noItemsFound={this.noItemsFound}
          items={this.state.items}
        />
      </div>
    );
  }
}

export default App;
