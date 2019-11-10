import React, { Component } from "react";
import "./App.css";
import Count from "./components/Count/Count";
import Control from "./components/Control/Control";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1> This is a Demo Of React Redux</h1>
          <p> A Basic structure of a react redux application.. </p>
          <Count />
          <Control />
        </div>
      </Provider>
    );
  }
}

export default App;

//Store
//Reducer
//action
//dispatch
//subscriber
