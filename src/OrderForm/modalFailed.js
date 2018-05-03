import React, { Component } from 'react';
//import Layout from './Layout';
import { Modal, Button, Container } from 'semantic-ui-react'


export default class modalFailed extends Component {
  constructor () {
    super();
 
  }


  newHandler () {
    // TODO Click behavior - move to 

  }

  render () {
    let open = this.props.open;
    let toggleModal = this.props.toggleModal;
    let message = this.props.message;
    return (
  <div className='App'>
    <Container>
    <div>
    <Modal size='small' open={open}  closeOnDimmerClick={false}  onClose={this.close} >

          <Modal.Content align='center'>
            <p >{message}</p>
          </Modal.Content>
          <Modal.Actions >
            <div align='center'>
            <Button positive icon='checkmark' labelPosition='right' content='Ok' onClick={toggleModal} />
            </div>
          </Modal.Actions>
  </Modal>
  </div>
  </Container>
  </div>
    )
  }
}
