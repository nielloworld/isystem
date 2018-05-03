import React, { Component } from 'react';
//import Layout from './Layout';
import { Modal, Button, Container } from 'semantic-ui-react'
import logo from './img/logo.png';


export default class Home extends Component {
  constructor () {
    super();
 
  }


  newHandler () {
    // TODO Click behavior - move to 
    window.location = '../orderform';
  }

  render () {
   
    return (
        <body>
  <div className='App'>
    <Container>
    <div>
    <Modal size='small' defaultOpen  closeOnDimmerClick={false}  onClose={this.close} >

          <Modal.Content align='center'>
          <img src={logo} className='App-logo' alt='logo'   />
            <p >Proceed to Order?</p>
          </Modal.Content>
          <Modal.Actions >
            <div align='center'>
            <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={(e) => this.newHandler(e)} />
            </div>
          </Modal.Actions>
  </Modal>
  </div>
  </Container>
  </div>
  </body>
    )
  }
}
