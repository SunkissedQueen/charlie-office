# Getting Started with Create React App

References 
- [React State](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/react/state.md)
- [Create React App](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/react/create-react-app.md)
- [Class Inheritance](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/class-inheritance.md)
- [Style React App](https://blog.logrocket.com/styling-in-react-4-ways-style-react-app/)
- [Destructuring](https://sebhastian.com/react-destructuring/)


### Terminal Commands
- Start at your desktop
- $ mkdir charlie-office
- $ cd charlie-office
- $ git checkout -b state-cb-b2
- $ yarn create react-app state-charlean-charlie2022
- $ cd state-charlean-charlie2022
- $ yarn start

### Helpful commands/Troubleshooting
- control + c (stops the server)
- control + t (opens a new terminal tab)
- Modify the branch name ---> $ git branch -m <new-branch-name>
- All git commands occur at the repo level
- All yarn commands occur at the project level
- Suggestion---> use the README to store your actions to build and troubleshoot the react application

### Common Error Messages
```
Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
```
- Ensure you have React fragments within your return that encapsulates all the code that you want to be rendered on your web page
```
WebSocketClient.js:16 WebSocket connection to 'ws://localhost:3000/ws' failed: 
```
- Check to see if terminal is still running
- $ yarn start

```
src/App.js
  Line 11:10:  'Tracker' is not defined  react/jsx-no-undef
```
- make sure your component is imported and called

## Build your display component
- Select the src folder in your text editor
- Select the App.js
- Remove the boilerplate information
- Copy/Paste a basic App class component
- Refactor for your project

```javascript
import React, { Component } from 'react'

class App extends Component {
  render() {
    return(
      <>
        <h1>Student → Full Stack Web Developer → Intern → Paid</h1>
        <h2>Job Readiness Tracker</h2>
        <p>Skills: 0</p>
        <button>Add that next skill set</button>        
      </>
    )
  }
}
export default App
```

#### There are particular JavaScript keywords that are used to create and access information within a class:

- constructor: a special method for creating and initializing objects, this is a life cycle method that runs automatically when the class component is invoked.
- props: keyword (properties) for passing information from one component to another
- this: a JavaScript keyword that refers to the object it belongs to
- super: within in the constructor method to create inheritance we need another keyword super() which passes the attributes from the constructor in the parent class

- In React we create class variables using state. State is an object that stores data as key:value pairs; it can hold as many as needed for that component. The values in the state object can be made available to the entire class.

- The methods we write that produce behavior specific to our app live between the constructor and the render. 

- React has a special method called setState() whose job is to update the values in the state object. 

- Just like any method, it is not doing anything until it gets called. And we want to call our method when the button gets clicked. So we need an onClick attribute.

- App.js is the highest level component. It is the class that puts everything else on the page. We are going to group all the other components we create into another folder. This is just a convention to keep our files organized. Inside of src we are going to create a new folder called components.

- Cut the logic coding from App.js and paste it into a new component class file.

- App.js needs to know how to find the new component file.
> Import the component
> Call the component in the return

Logic Component
```javascript
import React, { Component } from 'react'

class Tracker extends Component {

  constructor(props){
    super(props)
    this.state = {
      skills: 0,
    }
  }

  addSkill = () => {
    this.setState({skills: this.state.skills + 1})
  }

  render() {
    return(
      <div id="square">
        <p>Skills: {this.state.skills}</p>
        <button onClick={this.addSkill}>
          Add that new skill set
        </button>        
      </div>
    )
  }
}
export default Tracker
```

Styling:
- Option 1: Add id attribute to the open tag of the element you want to change. Suggest using a div tag because it makes styling easier. Then make changes to the id attribute in App.css

- Option 2: Use a class attribute ---> `className="square"`

- Option 3: Inline styling. Go to the opening tag of the element you want to change. ----> `style={ {backgroundColor: "purple",color: "white"} }`

- Option 4: Update the state object
constructor section
```javascript
    this.state = {
      skills: 0,
      backgroundColor: "purple",
      color: "white"
    }
```
render section
```javascript
        <button 
          onClick={this.addSkill} 
          style={ {backgroundColor: this.state.backgroundColor, color: this.state.color} }
        >
```

Once you have an application that works properly, go back and see if there are places that can be refactored.

#### Destructuring
render section
  -  `const {backgroundColor, color, skills} = this.state`
```javascript
        <p>Skills: {skills}</p>
        <button 
          onClick={this.addSkill} 
          style={ {backgroundColor: backgroundColor, color: color} }
        >
```

## Merging to Remote Repository

Leave the project folder and go to the main repository (react-challenges) 
- $ `cd ..`
Push your changes
- $ `git status`
- $ `git add <file-name>`
- $ `git commit -m "created a skill tracker with display and logical components"`
- $ `git push origin state`

## Switching drivers
- $ git clone <repo>
- $ cd into repo
- $ git fetch origin <branch-name>
- $ git checkout <branch-name>
- $ cd into the project repo
- $ yarn 

## Make a pull request
- Inside of the repository on GitHub, Click `Compare & pull request`
- You will then be redirected to a page where you can create a pull request. Click `Create pull request`