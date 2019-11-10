import React,{Component} from "react";
import { connect } from "react-redux";

class Count extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
      </div>
    )
  }
};

const mapStateToProps =state=> ({
  counter: state.count.count
});

export default connect(mapStateToProps)(Count);
