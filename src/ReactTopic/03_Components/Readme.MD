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

### More About Class C.

#### Class

- A "Class" in Javascript is a blueprint for creating objects that have the same properties and access to the same methods

so,Header,Content,Footer are react components where we defined my function inside.
