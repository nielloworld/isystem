import React, { Component } from 'react';
import { GetEquipmentList } from '../rest';
import Equipment from './Equipment';
import Layout from '../Layout';

export default class EquipmentList extends Component {
  constructor () {
    super();
    this.state = {
      equipment: []
    };
  }

  // First render
  componentDidMount () {
    GetEquipmentList().then(results => {
      this.setState({
        equipment: results
      });
    });
  }

  render () {
    // Fetch
    const list = this.state.equipment.map(equipment => <Equipment key={equipment._id} {...equipment}/>);
    return <Layout title="Equipment">
      <div> item </div>
      {list}
    </Layout>;
  }
}
