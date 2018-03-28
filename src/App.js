// Components
import React, { Component } from "react";
import axios from "axios";

// CSS
import "./css/App.css";

// Component Imports
import ApiForm from "./components/ApiForm";
import NavMenu from "./components/NavMenu";
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: 12345,
      data: [],
      mapData: {},
      zipCode: "11374"
    };

    this.handleKeyChange = this.handleKeyChange.bind(this);
  }

  componentWillMount() {
    this.getData(11374);
  }

  async getData(zipCode) {
    try {
      const response = await axios.get(
        `https://data.cityofnewyork.us/resource/24t3-xqyv.json?zip=${zipCode}`
      );
      this.setState({ data: response.data }, function() {
        console.log(this.state.data);
      });
    } catch (error) {
      console.log("Error retrieving ideas!");
      console.log(error);
    }
  }

  async handleKeyChange(event) {
    console.log("inside func");
    this.setState({ zipCode: event.target.value }, function() {
      if (this.state.zipCode.length === 5) {
        console.log(this.state.zipCode);
        this.getData(this.state.zipCode);
      }
    });
  }

  render() {
    return (
      <div className="App" style={{fontFamily: "Montserrat"}}>
        <NavMenu />
        <ApiForm
          handleKeyChange={this.handleKeyChange}
          data={this.state.data}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
