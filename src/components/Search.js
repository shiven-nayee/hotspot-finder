import React, { Component, Fragment } from 'react';

// Components
import Tables from "./Tables";
import Map from "./Map";
import {
  Button
} from "reactstrap";

class Search extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    
    render() { 
        return (
            <Fragment>
            {console.log('location', this.props.routeProps.location.pathname)}
            <form className="enterZip">
              <input
                className="zipField"
                type="text"
                placeholder="Enter a zip code"
                onChange={this.props.handleKeyChange}
              />
              <Button>
                Search
              </Button>
            </form>
            <Map data={this.props.data} routeProps={this.props.routeProps}/>
            <Tables data={this.props.data} />
          </Fragment>
         )
    }
}
 
export default Search;