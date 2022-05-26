import React, { Component } from 'react'

class Plate extends Component {

  render() {
    return (
      <>
        <ul>
          {this.props.foodItem.map((value, index )=> {
            return(
            <li key={index}> 
              <button onClick={ () => this.props.fillPlate(value)}>
                {value} 
              </button>
            </li>)
          })}
        </ul>
      </>
    )
  }
}

export default Plate