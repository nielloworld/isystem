import React from 'react';

// Display component only. Should receive all relevant props/info from list parent.
const Equipment = (props) => (
  <div>Equipment name: {props.item} | Quantity: {props.quantity}</div>
);
export default Equipment;
