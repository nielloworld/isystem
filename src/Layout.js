/**
 * This file serves as the "wrapper" for all pages. This will contain the logo,
 * the sidebar/navbar (if any), and then it should render any children.
 */

import React from 'react';
import { Header, Icon, Container } from 'semantic-ui-react'
import logo from './img/logo.png';
//const logo = "public/logo.png"
const Layout = (props) => (
  <div>
  <div className='App'>
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-intro'>Inventory System</h1>
            <p>
              <a className='social-link' href="/" >Home</a> &bull; <a className='social-link' href="/equipment">Equipment</a> &bull; <a className='social-link' href='/orders'>Orders</a>
            </p>

          </div>
        </div>
        <Container>
    <h1>{props.title}</h1>
    {props.children}
    </Container>
  </div>
);
export default Layout;
