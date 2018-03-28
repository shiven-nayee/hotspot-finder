import React, { Component, Fragment } from "react";

// Components
import Tables from "./Tables";
import Map from "./Map";
import { Button } from 'reactstrap';

class ApiForm extends Component {
  render() {
    return (
      <Fragment>
        <form className="enterZip" onSubmit={this.props.handleSubmit}>
          <input
            className="zipField"
            type="text"
            placeholder="Enter a zip code"
            onChange={this.props.handleKeyChange}
          />
          <Button id="submit" color="info">
            Find by Zipcode
          </Button>
        </form>
          <Map data={this.props.data} />
          <Tables data={this.props.data} />  
      </Fragment>
    );
  }
}

export default ApiForm;
