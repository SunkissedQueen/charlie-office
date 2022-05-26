import React, { Component } from 'react'
import Plate from './components/Plate'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      adultMenu: ["Brisket", "Zucchini", "Ribs", "Corn", "Asparagus"],
      kidMenu: ["Hot Dogs", "Pizza", "Burgers", "French Fries", "Slushie"],
      plate: []
    }
  }

  fillPlate = (food) => {
    this.setState({plate: [...this.state.plate, food]})
  }

  render() {
    return (
      <>
        <h1>Charlie's BBQ</h1>
        <h2>Adult Menu</h2>
        <Plate foodItem={this.state.adultMenu} fillPlate={this.fillPlate}/>
        <h2>Kids Menu</h2>
        <Plate foodItem={this.state.kidMenu} fillPlate={this.fillPlate}/>
        <h3>What's on your plate?</h3>
        <ul>
            {this.state.plate.map((value, index) => {
              return <li key={index}> {value} </li>
            })}
        </ul>
      </>
    )
  }
}

export default App