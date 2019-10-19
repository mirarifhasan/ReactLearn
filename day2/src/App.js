import React, {Component} from 'react';


// Example 1

// export default function title1(person) {
//   return (
//       <h2>Hi, {person.name}</h2>
//   )
// }


//Example 2

// export default function title2(person) {
//   return (
//     <h1>Hi {person.tag}, your name {person.name.fname}</h1>
//   )
// }


// Example 3
export default class titlecls extends Component{

  constructor(props){
    super(props)
    this.state = this.props.name
  }

  render(){
    return(
      <div>
        <p>Hi, {this.state.fname} {this.props.name.lname}</p>
      </div>
    )
  }

}

