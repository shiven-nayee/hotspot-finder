import React, { Component, Fragment } from 'react';

// Components
import { Button } from 'reactstrap';

class ListItem extends Component {
    render() { 
        const buttonStyle = {borderRadius: `100%`};
        return (
            <Fragment>
                <tr>
                    {/* {console.log(this.props)} */}
                    <td>{this.props.zip}</td>
                    <td>{this.props.city}</td>
                    <td>{this.props.location}</td>
                    {/* <td>{this.props.latitude}</td>
                    <td>{this.props.longitude}</td> */}
                    <td><Button color="success" style={buttonStyle}>+</Button></td>
                    <td><Button color="danger" style={buttonStyle}>-</Button></td>
                </tr>
            </Fragment>
         )
    }
}
 
export default ListItem;