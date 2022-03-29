import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    console.log("Constructor");
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
  }

  componentDidMount() {
    console.log("Component did mount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log(this.props.ignoreProp, nextProps.ignoreProp);
      console.log("Component should not update");
      return false;
    }
    console.log("Component should update");
    return true;
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("Get snapshot before update");
    return null;
  }

  render() {
    console.log("Render");
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div>Counter: {this.state.counter}</div>
      </div>
    );
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component did unmount");
  }
}
