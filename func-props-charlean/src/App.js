import React, { Component } from 'react'
import Plate from './components/Plate'

class App extends Component{

  constructor(props) {
    super(props)
    this.state = {
      adultMenu: ["brisket", "ribs", "potato"],
      kidMenu: ["hot dog", "burger", "fries"],
      plate: []
    }
  }

  fillPlate = (food) => {
    this.setState({plate: [...this.state.plate, food]})
  }

  render(){
    return(
      <>
        <h1>Charlie's BBQ</h1>
        <h2>Adult Menu</h2>
        <Plate 
          menuItem={this.state.adultMenu}
          fillPlate={this.fillPlate}
        />
        <h2>Kid Menu</h2>
        <Plate 
          menuItem={this.state.kidMenu}
          fillPlate={this.fillPlate}
        />
        <h3>What's on your plate?</h3>
        <ul>
          {this.state.plate.map((value, index) => {
            return(
            <li key={index}>
              {value}
            </li>)
          })}
      </ul>
      </>
    )
  }
}

export default App