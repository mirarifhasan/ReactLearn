import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./control.module.css";
import { add, sub, restart } from "../../actions/controlAction";

class Control extends Component {
  addCount = () => {
    this.props.add();
  };
  subCount = () => {
    this.props.sub();
  };
  restartCount = () => {
    this.props.restart();
  };

  render() {
    return (
      <div className={classes.btn}>
        <button onClick={this.addCount}>+Add</button>
        <button onClick={this.subCount}>-Sub</button>
        <button onClick={this.restartCount}>Restart</button>
      </div>
    );
  }
}

export default connect(null,{ add, sub, restart })(Control);
