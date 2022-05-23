# Getting Started with Create React App

Syllabus References [React State](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/react/state.md)
Syllabus References [Create React App](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/react/create-react-app.md)
[Class Inheritance](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/class-inheritance.md)

### Terminal Commands
You will be creating a personal repository to store this react application. This will not be pushed up to the repository in class. You will create a separate markdown file to store the steps you took to complete the actions. I suggest using the README to store your actions then copy/paste into a markdown file that will be pushed up to github.

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
- For the class projects, you will be pushing up a markdown file to the class repository

### Common Error Messages
```
Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
```
- Ensure you have React fragments within your return that encapsulates all the code that you want to be rendered on your web page


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











