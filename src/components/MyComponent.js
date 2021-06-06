import React, { Component } from 'react';

class MyComponent extends React.Component {
  render() {
    return (
      <div className="my-components">
        <h2>This is {this.props.title}'s Website!</h2>
        <h5>{this.props.technology} is used to develop this website</h5>
      </div>
    );
  }
}

// Creating default props for MyComponent
MyComponent.defaultProps = {
  title: 'Yoog Gurung',
  technology: 'React'
};

export default MyComponent;
