## Create React App
 - $ git pull origin main
 - $ git status
 - $ git checkout -b func-props-cb-aw
 - $ yarn create react-app func-props-charlean-austin
 - $ cd func-props-charlean-austin
 - $ yarn start
 - $ code .

Open additional tabs in the terminal
 - `command + t`

## Build a display class component
```javascript
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <>
      <h1>Charlie's BBQ</h1>
      <h2>Adult Menu</h2>
        <ul>
          <li>Brisket</li>
          <li>Asparagus</li>
          <li>Ribs</li>
          <li>Corn</li>
        </ul>
      <h2>Kids Menu</h2>
        <ul>
          <li>Hot Dogs</li>
          <li>Pizza</li>
          <li>Burgers</li>
          <li>French Fries</li>
        </ul>
      </>
    )
  }
}

export default App
```

## React State --- Logic Component

### Store data in an array
```javascript
  constructor(props){
    super(props)
    this.state = {
      adultMenu: ["Brisket", "Zucchini", "Ribs", "Corn"],
      kidMenu: ["Hot Dogs", "Pizza", "Burgers", "French Fries"],
    }
  }
```

### Use hof to access values
```javascript
        <ul>
          {this.state.adultMenu.map(value => {
            return <li>{value}</li>
          })}
        </ul>
```

## Make a child component with dynamic data
 - Make a components folder under src
 - Create a file with the new class name
 - Import and call the new component
 - Using props pass the state object data through the component call
    > made a variable to store the data
    > In child component, change state to props and the variable name
    > Any additional variables will need to a component call with its appropriate state object data

## Error Message
```
react-jsx-dev-runtime.development.js:97 Warning: Each child in a list should have a unique "key" prop.
```

- Add `index` to the data that is assessed from the array within the hof
- Assign the index to the key property within the opening tag on the line item

```javascript
        <ul>
          {this.props.foodItem.map((value, index) => {
            return <li key={index}> {value} </li>
          })}
        </ul>
```

## Add a button feature
- Add a button to the line items
- Add a key in the state object to store the data
- Add a header to designate a space that the data will be displayed
- Make a unique method

```javascript
  fillPlate = (food) => {
    alert(food)
  }
```
- Perform method call in the component call
- Use an anonymous function to allow button to trigger the function

```javascript
              <button onClick={ () => this.props.fillPlate(value)}>
                {value} 
              </button>
```

- Update
- 
```javascript
  fillPlate = (food) => {
    this.setState({plate: [...this.state.plate, food]})
  }
```