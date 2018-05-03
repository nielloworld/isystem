import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import EquipmentList from './EquipmentList/EquipmentList';
import OrderList from './OrderList/OrderList';
import OrderForm from './OrderForm/OrderForm';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    // TODO - Design home page
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/equipment" component={EquipmentList}></Route>
          <Route path="/orders" component={OrderList}></Route>
          <Route path="/orderform" component={OrderForm}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
