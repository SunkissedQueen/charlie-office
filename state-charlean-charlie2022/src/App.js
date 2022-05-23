import React, { Component } from 'react'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      skills: 0
    }
  }

  render() {

    console.log(this.state.skills)

    return(
      <>
        <h1>Student → Full Stack Web Developer → Intern → Paid</h1>
        <h2>Job Readiness Tracker</h2>
        <p>Skills: {this.state.skills}</p>
        <button>Add that next skill set</button>        
      </>
    )
  }
}
export default App
