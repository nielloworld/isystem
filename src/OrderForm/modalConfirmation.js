import React, { Component } from 'react';
//import Layout from './Layout';
import { Modal, Button, Container } from 'semantic-ui-react'


export default class modalConfirmation extends Component {
  constructor () {
    super();
 
  }


  newHandler () {
    // TODO Click behavior - move to 
  }

  render () {
    let open = this.props.open;
    let togglecModal = this.props.togglecModal;
    let togglec2Modal = this.props.togglec2Modal;
    return (
  <div className='App'>
    <Container>
    <div>
    <Modal size='small' open={open}  closeOnDimmerClick={false}  onClose={this.close} >

          <Modal.Content align='center'>
            <p >You want to submit the order for approval?</p>
          </Modal.Content>
          <Modal.Actions >
            <div align='center'>
            <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={togglecModal} />
            <Button negative icon='remove' labelPosition='right' content='No' onClick={togglec2Modal} />
            </div>
          </Modal.Actions>
  </Modal>
  </div>
  </Container>
  </div>
    )
  }
}
