import React, { Component, Fragment } from "react";
import axios from "axios";

// Components
import { Button } from "reactstrap";

class ListItem extends Component {
  render() {
    const buttonStyle = { borderRadius: `100%` };
    return (
      <Fragment>
        <tr>
          <td>{this.props.zip}</td>
          <td>{this.props.city}</td>
          <td>{this.props.location}</td>
          <td>
            <Button
              color="success"
              style={buttonStyle}
              onClick={() => {
                console.log("clicked");
                try {
                  const newFavoriteResponse = axios.post(
                    "http://localhost:8080/users/add",
                    {
                      userName: "Favorite",
                      lat: this.props.latitude,
                      lng: this.props.longitude,
                      zip: this.props.zip
                    }
                  );
                  console.log("Favorite response: ", newFavoriteResponse);
                } catch (error) {
                  console.log(error);
                  console.log("Could not add favorite");
                }
              }}
            >
              +
            </Button>
          </td>
        </tr>
      </Fragment>
    );
  }
}

export default ListItem;
