import React from 'react';
import { Table } from 'semantic-ui-react'

// Display component only. Should receive all relevant props/info from list parent.
const Order = (props) => (
  <Table.Row>
  <Table.Cell> {props.joborderno} </Table.Cell>
  <Table.Cell> {props.item} </Table.Cell>
  <Table.Cell> {props.quantity} </Table.Cell>
  </Table.Row>
);
export default Order;