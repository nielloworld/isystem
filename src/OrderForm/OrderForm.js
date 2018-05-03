import React, { Component } from 'react';
import Layout from '../Layout';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class OrderForm extends Component {
  constructor () {
    // Set field values to state as null
    super();
    
  }

  render () {
    return (
      <Layout title="Create New Order">
      <Form unstackable>
        <Form.Group widths={2}>
          <Form.Input label='Item' placeholder='Item' />
          <Form.Input label='Quantity' placeholder='Quantity' type='number'/>
        </Form.Group>
       
        <Button type='submit'>Submit</Button>
      </Form>
      </Layout>
    );
  }
};
