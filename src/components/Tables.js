import React, { Component } from "react";

// Components
import { Table } from 'reactstrap';

class Tables extends Component {
  render() {
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>Exercise</th>
              <th># of Sets</th>
              <th># of Reps</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((list, index) => {
            //   return <Exercise {...exercise} key={index} index={index} />;
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Tables;
