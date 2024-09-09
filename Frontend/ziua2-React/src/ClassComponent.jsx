import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { numberOfAlerts: 0 };
  }
  render() {
    return <div>{this.state.numberOfAlerts}</div>;
  }
}
