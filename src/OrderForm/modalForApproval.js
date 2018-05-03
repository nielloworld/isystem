import React, { Component } from 'react';
//import Layout from './Layout';
import { Modal, Button, Container } from 'semantic-ui-react'


export default class modalForApproval extends Component {
  constructor () {
    super();
 
  }


  newHandler () {
    // TODO Click behavior - move to 
    
    window.location = '../orders';
  }

  render () {
    let open = this.props.open;
    let toggleModal = this.props.toggleModal;
    return (
  <div className='App'>
    <Container>
    <div>
    <Modal size='small' open={open}  closeOnDimmerClick={false}  onClose={this.close} >

          <Modal.Content align='center'>
            <p >Your order is now for approval</p>
          </Modal.Content>
          <Modal.Actions >
            <div align='center'>
            <Button positive icon='checkmark' labelPosition='right' content='Ok' onClick={(e) => this.newHandler(e)} />
            </div>
          </Modal.Actions>
  </Modal>
  </div>
  </Container>
  </div>
    )
  }
}
