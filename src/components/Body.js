import React, { Component, Fragment } from "react";

// Components
import Search from './Search';
import Favorites from './Favorites';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class Body extends Component {
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
      <Router>
        <Switch>
          <Route exact path="/" render={(routeProps) => {
            return <Search data={this.props.data} routeProps={routeProps} handleKeyChange={this.props.handleKeyChange}/>
          }} />
          <Route exact path="/favorites" render={(routeProps) => {
            return <Favorites data={this.props.userData} routeProps={routeProps}/>
          }} />
        </Switch>
      </Router>
      </Fragment>
    );
  }
}

export default Body;
