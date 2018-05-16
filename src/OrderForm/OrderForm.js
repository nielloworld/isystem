import React, { Component } from 'react';
import { GetOrderList, GetEquipmentList } from '../rest';
import Layout from '../Layout';
import Equipment from '../EquipmentList/Equipment';
import { Button, Form, Table } from 'semantic-ui-react'
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
    this.togglec2Modal = this.togglec2Modal.bind(this);
    this.state = {
      equipment: [],
      item: '',
      quantity: '',
      status:'pending',
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
    const state = this.state
    const item = state.item
    const quantity = state.quantity
    const status = state.status
    axios.post('/api/order', { item, quantity,status })
    .then((result) => {
      
  });
    this.setState({
      cmodalIsOpen: false,
      amodalIsopen2: true,
    });

  }

  togglec2Modal() {
    this.setState({
      cmodalIsOpen: false,
    });
  }
  componentDidMount () {
    GetOrderList().then(result => {
      this.setState({
        orders: result
      });
    });
    GetEquipmentList().then(results => {
      this.setState({
        equipment: results
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

  onDropdownChange = (e, data) => {
    const state = this.state
    state[data.name] = data.value
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { item, quantity } = this.state;

    console.log(item)
    console.log(quantity)
    var itemexist = '';
    var sufficient = false;
    var itemleft = '';
    this.state.equipment.forEach(function (oitem) {
    console.log(oitem)

        if (oitem.item.toLowerCase() == item.toLowerCase()){
          console.log(oitem.item.toLowerCase())
          console.log(item.toLowerCase())
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
    const list = this.state.equipment.map(equipment => <Equipment key={equipment._id} {...equipment}/>);
    const confirmation =  <Modalconfirmation open={this.state.cmodalIsOpen} toggleModal={this.toggleModal} togglecModal={this.togglecModal} togglec2Modal={this.togglec2Modal} />
    const approval =  <Modalforapproval open={this.state.amodalIsopen2} toggleModal={this.toggleModal} />
    const failed = <Modalfailed open={this.state.fmodalIsOpen} message={this.state.failedmsg} toggleModal={this.toggleModal} />
    const equipmenttitle = [];
    this.state.equipment.forEach(function(element){
      
      var equips = {key: element.item, text:element.item, value: element.item}
      console.log(equips)
      equipmenttitle.push(equips)
    });

    
    return (
      <Layout title="Create New Order">
      <Form unstackable onSubmit={this.onSubmit}>
        <Form.Group widths={2}>
        
          <Form.Select fluid label='Item' name="item" options={equipmenttitle} placeholder='Item' onChange={this.onDropdownChange} required/>
          <Form.Input label='Quantity' placeholder='Quantity' type='number' name="quantity"  value={quantity} onChange={this.onChange} required />
        </Form.Group>
       
        <Button color='green' type='submit'>Submit</Button>
      </Form>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={11}>Item name</Table.HeaderCell>
              <Table.HeaderCell >Quantity</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {list}
          </Table.Body>
        </Table>
      {confirmation}
      {approval}
      {failed}
      </Layout>
      
    );
  }
};
