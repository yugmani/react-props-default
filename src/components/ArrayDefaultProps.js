import React, { Component } from 'react';

class ArrayDefaultProps extends React.Component {
  render() {
    return (
      <div className="array-props">
        <h2>My Favorite Colors</h2>
        <h3>Array as Default Props</h3>
        <ul>
          {this.props.colors.map((color, index) => (
            <li key={index}>
              {index + 1} {}
              <b>
                <em>{color}</em>
              </b>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ArrayDefaultProps.defaultProps = {
  colors: ['blue', 'red', 'yellow']
};

export default ArrayDefaultProps;
