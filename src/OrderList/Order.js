import React from 'react';

// Display component only. Should receive all relevant props/info from list parent.
const Order = (props) => (
  <div>Order ID: {props.ordeId}</div>
);
export default Order;