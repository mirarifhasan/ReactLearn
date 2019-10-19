import React, { Component } from 'react';

// export default function title(){
//     return <h1>Hello world</h1>
// }

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "Mir Arif",
      id: "77",
      home: "Dhaka",
      age: 22,
      favColor: 'Red',
      loggedIn: false
    }
  }

  getUsername = () => {
    var n = prompt("Enter your name");
    this.setState({
      name: n
    })
  }

  loginCheck = () => {
    this.setState({
      loggedIn: true
    })
  }

  renderTemplate = () => {
    if (this.state.loggedIn) {
      return (
        <h1>successfully loggedIn</h1>
      )
    } else {
      return <h1>Please log in</h1>
    }
  }

  favColorChange = () => {
    if (this.state.favColor == "Red") {
      this.setState({
        favColor: "Green"
      })
    }
    else if (this.state.favColor == "Green") {
      this.setState({
        favColor: "Red"
      })
    }
  }

  renderColor = () => {
    return this.state.favColor;
  }

  componentWillMount() {
    console.log("will mount call");
  }

  render() {
    return (
      <div>
        <button onClick={this.getUsername}>Change Name</button>
        <button onClick={this.loginCheck}>login</button>
        <h1>Hi {this.state.name}, your age is {this.state.age}</h1>

        <div>{this.renderTemplate()}</div>

        <button onClick={this.favColorChange}>Color</button>
        <div>{this.renderColor()}</div>
      </div>
    )
  }
}