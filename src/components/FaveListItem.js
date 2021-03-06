import React, { Component, Fragment } from "react";
import axios from "axios";

// Components
import { Button } from "reactstrap";

class FaveListItem extends Component {
  render() {
    const buttonStyle = { borderRadius: `100%` };
    return (
      <Fragment>
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.zip}</td>
          <td>{this.props.lat}</td>
          <td>{this.props.lng}</td>
          <td>
            <Button color="danger" style={buttonStyle} onClick={() => {
                console.log("clicked");
                try {
                  const newFavoriteResponse = axios.delete(
                    (`http://ec2-54-197-40-57.compute-1.amazonaws.com:8080/users/${this.props.id}`)
                  )
                  console.log(newFavoriteResponse);
                } catch (error) {
                  console.log(error);
                  console.log("Could not add favorite");
                }
              }}>
              -
            </Button>
          </td>
        </tr>
      </Fragment>
    );
  }
}

export default FaveListItem;
