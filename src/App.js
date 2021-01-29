import React from 'react';
import logo from './logo.svg';
import './App.css';

import TopHeader from './TopHeader';
import ShoppingList from './ShoppingList';



class App extends React.Component {
  render() {
    return (
      <div className="App">

        <TopHeader
          logo={logo}
          title={'ReactND - Coding Practice'}
        />

        <ShoppingList />
      </div>
    );
  }
}



export default App;
