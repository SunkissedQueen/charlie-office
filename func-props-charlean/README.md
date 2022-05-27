## Build React App
 - $ git pull origin main
 - $ git checkout -b func-props-cb-aw
 - $ yarn create react-app func-props-charlean
 - $ cd func-props-charlean
 - $ yarn start
 - $ code .

## Charlie's BBQ Menu
- Goal is for app to display menu items for adults and kids and then allow each person to select a button to fill their plates with the selected item.

### Steps
- class component
- two separate arrays to hold the items
- button
- function to be triggered ---> fillPlate
- array to store the items selected ---> plate

### Build a basic class component
```javascript
import React, { Component } from 'react'

class App extends Component{
  render(){
    return(
      <>
        <h1>A Basic Class Component</h1>
      </>
    )
  }
}

export default App
```