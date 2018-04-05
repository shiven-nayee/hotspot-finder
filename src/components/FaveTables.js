import React, { Component } from "react";

// Components
import { Table } from 'reactstrap';
import FaveListItem from './FaveListItem';

class FaveTables extends Component {
  render() {
    return (
      <div className="table-container">
        <Table dark style={{color: '#cecece' }}>
          <thead>
            <tr>
            <th>ID</th>
              <th>Zip Code</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((list, index) => {
                return (
                    <FaveListItem 
                    {...list} 
                    key={index}
                    index={index} />
                )
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default FaveTables;
