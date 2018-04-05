import React, { Component, Fragment } from 'react';

// Components
import Tables from "./FaveTables";
import FaveMap from "./FaveMap";
import FaveTables from './FaveTables';
import {
  Button,
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";

class Favorites extends Component {
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
            <FaveMap data={this.props.data} routeProps={this.props.routeProps}/>
            <FaveTables data={this.props.data} />
            {console.log('dat ',this.props.data)}
          </Fragment>
         )
    }
}
 
export default Favorites;