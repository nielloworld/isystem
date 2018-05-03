import React, { Component } from 'react';
import { GetEquipmentList } from '../rest';
import Equipment from './Equipment';
import Layout from '../Layout';
import { Table } from 'semantic-ui-react'
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
      
    </Layout>;
  }
}
