import React, { Component, Fragment } from 'react';

// Components
import Tables from "./Tables";
import Map from "./Map";
import {
  Button,
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
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
            <form className="enterZip" onSubmit={this.props.handleSubmit}>
              <input
                className="zipField"
                type="text"
                placeholder="Enter a zip code"
                onChange={this.props.handleKeyChange}
              />
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>Find by: </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Zip</DropdownItem>
                  <DropdownItem>City</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </form>
            <Map data={this.props.data} routeProps={this.props.routeProps}/>
            <Tables data={this.props.data} />
          </Fragment>
         )
    }
}
 
export default Search;