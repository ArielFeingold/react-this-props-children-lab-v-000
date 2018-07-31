import React from 'react'
import PropTypes from 'prop-types';

export default class Invitation extends React.Component {
  render() {
    return(
      <div className="invetation">
        <h1>You've been invited!</h1>
        <div className="invetationDetails">{this.props.children}</div>
      </div>
    )
  }


}
