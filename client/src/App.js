import React, { Component } from 'react';
import './App.css';
import ItemList from './Component/itemList'
import Item from './Component/item'
import Menu from './Component/menu'
import {BrowserRouter, Route, Router} from "react-router-dom";
import AddItem from './Component/AddItem'

class App extends Component {


  

  render() {

    return (

      <BrowserRouter>
        <div>
              <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
          <Menu />
          <Route exact = {true} path = "/" component = {ItemList} />
          <Route path = "/item" component = {AddItem} />
          
        </div>
      </BrowserRouter>


  
    );
  }
}

export default App;