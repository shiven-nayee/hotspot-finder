import React, { Component, Fragment } from 'react';

class ListItem extends Component {
    render() { 
        return (
            <Fragment>
                <tr>
                    {/* {console.log(this.props)} */}
                    <td>{this.props.zip}</td>
                    <td>{this.props.city}</td>
                    <td>{this.props.location}</td>
                </tr>
            </Fragment>
         )
    }
}
 
export default ListItem;