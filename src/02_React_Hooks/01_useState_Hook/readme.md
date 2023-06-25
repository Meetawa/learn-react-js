# useState :

- To manage states. Returns a stateful value and an updater function to update it.
- The React useState Hook allows us to track state in a function component.
- State generally refers to data or properties that need to be tracking in an application.
- useState lets you use local state within a function component. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

## Import useState

- To use the useState Hook, we first need to import it into our component.

Example : Get your own React.js Server

- At the top of your component, import the useState Hook.

```
import { useState } from "react";
```

<mark>Notice</mark> that we are destructuring useState from react as it is a named export.

## Declare state variable

- Declaring a state variable is as simple as calling useState with some initial state value, like so: useState(initialStateValue).

```
const DeclareStateVar = () => {
  const [count] = useState(100)
  return <div> State variable is {count}</div>
}
```
