## More About Class Components

- A "Class" in Javascript is a blueprint for creating objects that have the same properties and access to the same methods

- A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

- The component also requires a render() method, this method returns HTML.

Example :

```diff
// Create a Class component called Car

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```

Example :

- Display the Car component in the "root" element:

```diff
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```

## Component Constructor

- If there is a constructor() function in your component, this function will be called when the component gets initiated.

- The constructor function is where you initiate the component's properties.

  - In React, component properties should be kept in an object called state.

- The constructor function is also where you honor the inheritance of the parent component by including the super() statement, which executes the parent component's constructor function, and your component has access to all the functions of the parent component (React.Component).

Example :

- Create a constructor function in the Car component, and add a color property:

```diff
class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a Car!</h2>;
  }
}
```

- Use the color property in the render() function:

Example :

```diff
class Car extends React.Component {
constructor() {
super();
this.state = {color: "red"};
}
render() {
return <h2>I am a {this.state.color} Car!</h2>;
}
}
```

## Props in the Constructor

- If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.

Example :

```
class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car model="Mustang"/>);
```

## Components in Components

- We can refer to components inside other components:

Example :

- Use the Car component inside the Garage component:

```diff
class Car extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <Car />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

## Components in Files

- React is all about re-using code, and it can be smart to insert some of your components in separate files.

- Note that the file must start by importing React (as before), and it has to end with the statement export default Car;.

Example :

- This is the new file, we named it Car.js:

```diff
import React from 'react';

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

export default Car;
```

- To be able to use the Car component, you have to import the file in your application.

Example :

- Now we import the Car.js file in the application, and we can use the Car component as if it was created here.

```diff
import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```

# React Class Component State

- React Class components have a built-in state object.

- You might have noticed that we used state earlier in the component constructor section.

- The state object is where you store property values that belongs to the component.

- When the state object changes, the component re-renders.

- Creating the state Object
- The state object is initialized in the constructor:

Example :

- Specify the state object in the constructor method:

```
class Car extends React.Component {
  constructor(props) {
    super(props);
  this.state = {brand: "Ford"};
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}
```

- The state object can contain as many properties as you like:

Example :

- Specify all the properties your component need:

```
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}
```

# Using the state Object

- Refer to the state object anywhere in the component by using the this.state.propertyname syntax:

Example:

- Refer to the state object in the render() method:

```
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
      </div>
    );
  }
}
```

## Changing the state Object

- To change a value in the state object, use the this.setState() method.

- When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).

Example:

- Add a button with an onClick event that will change the color property:

```
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}
```

## Note how we pass props to the base constructor:

- Class components should always call the base constructor with props.

## Using State Correctly

- There are three things you should know about setState().

- Do Not Modify State Directly
- For example, this will not re-render a component:

```
// Wrong
this.state.comment = 'Hello';
```

- Instead, use setState():

```
// Correct
this.setState({comment: 'Hello'});
```

- The only place where you can assign this.state is the constructor

## State Updates May Be Asynchronous

- React may batch multiple setState() calls into a single update for performance.

- Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

- For example, this code may fail to update the counter:

```
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

- To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

```
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

- We used an arrow function above, but it also works with regular functions:

```
// Correct
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```

# Lifecycle of Components

- Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

- The three phases are:
  - Mounting
  - Updating
  - Unmounting.
