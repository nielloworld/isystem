import React, { Component } from 'react';
import { GetOrderList } from '../rest';
import Layout from '../Layout';
import { Button, Checkbox, Form, Modal } from 'semantic-ui-react'
import axios from 'axios';
import Modalconfirmation from './modalConfirmation';
import Modalforapproval from './modalForApproval';
import Modalfailed from './modalFailed';

export default class OrderForm extends Component {
  constructor () {
    // Set field values to state as null
    super();
    this.toggleModal = this.toggleModal.bind(this);
    this.togglecModal = this.togglecModal.bind(this);
    this.state = {
      item: '',
      quantity: '',
      orders: [],
      cmodalIsOpen: false,
      fmodalIsOpen: false,
      amodalIsOpen: false,
      amodalIsopen2: false,
      failedmsg: ''
    };
    //this.handleChange = this.handleChange.bind(this);
  }
  toggleModal() {
    this.setState({
      cmodalIsOpen: this.state.modal,
      fmodalIsOpen: this.state.modal,
      amodalIsOpen: this.state.modal,
    });
  }
  togglecModal() {
    this.setState({
      cmodalIsOpen: false,
      amodalIsopen2: true,
    });
  }
  componentDidMount () {
    GetOrderList().then(result => {
      this.setState({
        orders: result
      });
    });
  }

  onChange = (e) => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

 
  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { item, quantity } = this.state;
    var itemexist = '';
    var sufficient = false;
    var itemleft = '';
    this.state.orders.forEach(function (oitem) {
      
        if (oitem.item.toLowerCase() == item.toLowerCase()){
          itemexist = oitem.item
          itemleft = oitem.quantity
          if (Number(quantity) <= Number(oitem.quantity)){
            sufficient = true
            
          }
        }
    
    })

    if (itemexist){
      // if item exists now check if quantity is sufficient
      console.log("exists")
      // if item is sufficient

      // else item is not sufficient
      console.log(sufficient)
      if (sufficient){
        this.setState({
          cmodalIsOpen: true
        });
        axios.post('/api/order', { item, quantity })
         .then((result) => {
           
      });
      }else{
        //alert("only " + itemleft + " of "+ item + "left");
        this.setState({
          fmodalIsOpen: true,
          failedmsg: "only " + itemleft + " of "+ item + "left",
        });
      }
    }else{
      // error in item does not exists
      console.log("nope")
      //alert("item does not exists");
      this.setState({
        fmodalIsOpen: true,
        failedmsg: "item does not exists",
      });
    }

  }
  render () {
    const { item, quantity } = this.state
    const confirmation =  <Modalconfirmation open={this.state.cmodalIsOpen} toggleModal={this.toggleModal} togglecModal={this.togglecModal} />
    const approval =  <Modalforapproval open={this.state.amodalIsopen2} toggleModal={this.toggleModal} />
    const failed = <Modalfailed open={this.state.fmodalIsOpen} message={this.state.failedmsg} toggleModal={this.toggleModal} />
    return (
      <Layout title="Create New Order">
      <Form unstackable onSubmit={this.onSubmit}>
        <Form.Group widths={2}>
        <Form.Input label='Item' placeholder='Item' name="item" value={item} onChange={this.onChange} required/>
          <Form.Input label='Quantity' placeholder='Quantity' type='number' name="quantity"  value={quantity} onChange={this.onChange} required />
        </Form.Group>
       
        <Button color='green' type='submit'>Submit</Button>
      </Form>
      {confirmation}
      {approval}
      {failed}
      </Layout>
      
    );
  }
};
