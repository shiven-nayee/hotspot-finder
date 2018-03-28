import React, { Component, Fragment } from "react";

// Components
import Tables from "./Tables";

class ApiForm extends Component {
  render() {
    return (
      <Fragment>
        <form className="enterZip" onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            placeholder="Enter a zip code"
            onChange={this.props.handleKeyChange}
          />
          <button id="submit" className="add">
            Add Zip Code
          </button>
        </form>
      </Fragment>
    );
  }
}

export default ApiForm;
