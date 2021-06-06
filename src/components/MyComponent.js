import React, { Component } from 'react';

class MyComponent extends React.Component {
  render() {
    return (
      <div className="my-components">
        <h2>Single Element as a Default Prop</h2>
        <h3>This is {this.props.title}'s Website!</h3>
        <h4>{this.props.technology} is used to develop this website</h4>
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
