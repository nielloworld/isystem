/**
 * This file serves as the "wrapper" for all pages. This will contain the logo,
 * the sidebar/navbar (if any), and then it should render any children.
 */

import React from 'react';

const Layout = (props) => (
  <div>
    <img src="logo.png" />
    <div>Any navbar items</div>
    <h1>{props.title}</h1>
    {props.children}
  </div>
);
export default Layout;
