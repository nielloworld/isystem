import React, { Component } from 'react';
import { GetOrderList } from '../rest';
import Layout from '../Layout';
import Order from './Order';
import { Table, Button } from 'semantic-ui-react'
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
    window.location = '../orderform';
  }

  render () {
    const orders = this.state.orders.map(order => <Order key={order._id} {...order}/>);
    return (
      
      <Layout title="Order List">
      <Button fluid color='green' onClick={(e) => this.newHandler(e)}>New</Button>
      <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width={11}>Job Order no.</Table.HeaderCell>
        <Table.HeaderCell >Item</Table.HeaderCell>
        <Table.HeaderCell >Quanity</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {orders}
    </Table.Body>
  </Table>
        
       
      </Layout>
    )
  }
}