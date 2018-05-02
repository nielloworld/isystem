import React, { Component } from 'react';

export default class OrderView extends Component {
  constructor () {
    super();
    this.state = {
      orderId: props.orderId, // or other prop name
      data: {}
    }
  }

  componentDidMount () {
    GetOrder(this.state.orderId).then(result => {

    });
  }

  render () {
    return (
      <Layout title="Viewing Order">

      </Layout>
    );
  }
};