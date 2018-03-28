// Components
import React, { Component } from 'react';
import axios from 'axios';

// CSS
import './css/App.css';

// Component Imports
import ApiForm from './components/ApiForm';
import NavMenu from './components/NavMenu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: 12345,
      data: [],
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
      this.setState({ data: response.data },
      function() {
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

   initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementsByClassName('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  render() {
    return (
      <div className="App">
        <NavMenu />
        <ApiForm 
        handleKeyChange={this.handleKeyChange} 
        data={this.state.data}/>
      </div>
    );
  }
}

export default App;
