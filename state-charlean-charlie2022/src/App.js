import React, { Component } from 'react'
import Tracker from './components/Tracker'
import './App.css'

class App extends Component {

  render() {

    return(
      <>
        <h1>Student → Full Stack Web Developer → Intern → Paid</h1>
        <h2>Job Readiness Tracker</h2>
        <h3>Week 1</h3>
        <Tracker />
        <h3>Week 2</h3>
        <Tracker />
        <h3>Week 3</h3>
        <Tracker />     
      </>
    )
  }
}
export default App
