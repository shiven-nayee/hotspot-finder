import React, { Component } from "react";

// Components
import { Table } from 'reactstrap';
import ListItem from './ListItem';

class Tables extends Component {
  render() {
    return (
      <div className="table-container">
        <Table dark style={{color: '#cecece' }}>
          <thead>
            <tr>
              <th>Zip Code</th>
              <th>City</th>
              <th>Location</th>
              <th></th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((list, index) => {
                return (
                    <ListItem 
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

export default Tables;
