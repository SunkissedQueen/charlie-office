import React, { Component } from 'react'

class Tracker extends Component {

  constructor(props){
    super(props)
    this.state = {
      skills: 0,
      backgroundColor: "purple",
      color: "white"
    }
  }

  addSkill = () => {
    this.setState({skills: this.state.skills + 1})
  }

  render() {
    const {backgroundColor, color, skills} = this.state
    return(
      <div id="square">
        <p>Skills: {skills}</p>
        <button 
          onClick={this.addSkill} 
          style={ {backgroundColor: backgroundColor, color: color} }
        >
          Add that new skill set
        </button>        
      </div>
    )
  }
}
export default Tracker
