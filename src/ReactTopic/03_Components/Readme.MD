# What is Component?

- Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

- Components come in two types, Class components and Function components

## Function Components

- A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.

Example :

- Create a Function component called Car

```diff
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}
```

## Class Component

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

- React application has a component called Car, which returns a <h2> element.

## More About Class Components

- A "Class" in Javascript is a blueprint for creating objects that have the same properties and access to the same methods

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

### NOTE :

Header,Content,Footer are react components where we defined function(Header and Content) and class(Footer) component inside these files.
