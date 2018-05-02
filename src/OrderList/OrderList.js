import React, { Component } from 'react';
import { GetOrderList } from '../rest';
import Layout from '../Layout';
import Order from './Order';

export default class OrderList extends Component {
  constructor () {
    super();
    this.state = {
      orders: []
    };
  }

  componentDidMount () {
    GetOrderList().then(result => {
      this.setState({
        orders: result
      });
    });
  }

  newHandler () {
    // TODO Click behavior - move to 
  }

  render () {
    const orders = this.state.orders.map(order => <Order
      orderId={order.id}
    ></Order>);
    return (
      <Layout title="Order List">
        <button onClick={(e) => this.newHandler(e)}>New</button>
        <div>{orders}</div>
      </Layout>
    )
  }
}