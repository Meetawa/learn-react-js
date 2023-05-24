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
