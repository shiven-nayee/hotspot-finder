import React, { Component, Fragment } from "react";

// Components
import Search from './Search';
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
          <Route exact path="/" render={() => {
            console.log('inside');
            return <Search data={this.props.data} />
          }} />
        </Switch>
      </Router>
      </Fragment>
    );
  }
}

export default Body;
