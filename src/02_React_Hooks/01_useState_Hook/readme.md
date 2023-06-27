# useState HOOKS:

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

- Updating a state variable is as simple as invoking the updater function returned by the useState invocation: const [stateValue, updaterFn] = useState(initialStateValue);.

## Initialize useState

![Alt text](./UseState_hook_1.png)

- We initialize our state by calling useState in our function component.

- useState accepts an initial state and returns two values:

  - The current state.
  - A function that updates the state.

```
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}
```

<mark>Notice</mark> that again, we are destructuring the returned values from useState.

- The first value, color, is our current state.

- The second value, setColor, is the function that is used to update our state.

<mark>Note :</mark>These names are variables that can be named anything you would like.

- Lastly, we set the initial state to an empty string: useState("")

## Tip: What Do Square Brackets Mean?

- You might have noticed the square brackets when we declare a state variable:

```
  const [count, setCount] = useState(0);
```

- The names on the left aren’t a part of the React API. You can name your own state variables:

```
  const [fruit, setFruit] = useState('banana');
```

- This JavaScript syntax is called “array destructuring”. It means that we’re making two new variables fruit and setFruit, where fruit is set to the first value returned by useState, and setFruit is the second. It is equivalent to this code:

```
  var fruitStateVariable = useState('banana'); // Returns a pair
  var fruit = fruitStateVariable[0]; // First item in a pair
  var setFruit = fruitStateVariable[1]; // Second item in a pair
```

- When we declare a state variable with useState, it returns a pair — an array with two items. The first item is the current value, and the second is a function that lets us update it. Using [0] and [1] to access them is a bit confusing because they have a specific meaning. This is why we use array destructuring instead.

## Update State

- To update our state, we use our state updater function.
- We should never directly update state. Ex: color = "red" is not allowed.

```
Example:
Use a button to update the state:

import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
```

- Note how the age state variable is being updated.

```
const UpdateStateVar = () => {
  const [age, setAge] = useState(19)
  const handleClick = () => setAge(age + 1)

  return (
    <div>
      Today I am {age} Years of Age
      <div>
        <button onClick={handleClick}>Get older! </button>
      </div>
    </div>
  )
}
```

## Why does the React useState Hook not update immediately?

- If you find that useState/setState are not updating immediately, the answer is simple: they’re just queues.

- React useState and setState don’t make changes directly to the state object; they create queues to optimize performance, which is why the changes don’t update immediately.

## React Hooks and multiple state variables

- Multiple state variables may be used and updated from within a functional component, as shown below:

```
onst MultipleStateVars = () => {
  const [age, setAge] = useState(19)
  const [siblingsNum, setSiblingsNum] =
    useState(10)

  const handleAge = () => setAge(age + 1)
  const handleSiblingsNum = () =>
      setSiblingsNum(siblingsNum + 1)


  return (
    <div>
      <p>Today I am {age} Years of Age</p>
      <p>I have {siblingsNum} siblings</p>

      <div>
        <button onClick={handleAge}>
          Get older!
        </button>
        <button onClick={handleSiblingsNum}>
            More siblings!
        </button>
      </div>
    </div>
  )
}
```

## What Can State Hold

- The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

Example:

- Create multiple state Hooks:

```
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```

- Or, we can just use one state and include an object instead!

```
//Create a single Hook that holds an object:

import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```

## Updating Objects and Arrays in State

- When state is updated, the entire state gets overwritten.
- What if we only want to update the color of our car?
- If we only called <mark>setCar({color: "blue"})</mark>, this would remove the brand, model, and year from our state.

We can use the JavaScript spread operator to help us.

Example:
Use the JavaScript spread operator to update only the color of the car:

```
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```

- Because we need the current value of state, we pass a function into our setCar function. This function receives the previous value.

- We then return an object, spreading the previousState and overwriting only the color.

## Use object state variable

- As opposed to strings and numbers, you could also use an object as the initial value passed to useState.

<mark>Note</mark> that you have to pass the entire object to the useState updater function because the object is replaced, not merged.

```
// 🐢 setState (object merge) vs useState (object replace)
// assume initial state is {name: "Ohans"}

setState({ age: 'unknown' })
// new state object will be
// {name: "Ohans", age: "unknown"}

useStateUpdater({ age: 'unknown' })
// new state object will be
// {age: "unknown"} - initial object is replaced
```

Example is :

```
const StateObject = () => {
  const [state, setState] = useState({ age: 19, siblingsNum: 4 })
  const handleClick = val =>
    setState({
      ...state,
      [val]: state[val] + 1
    })
  const { age, siblingsNum } = state

  return (
    <div>
      <p>Today I am {age} Years of Age</p>
      <p>I have {siblingsNum} siblings</p>

      <div>
        <button onClick={handleClick.bind(null, 'age')}>Get older!</button>
        <button onClick={handleClick.bind(null, 'siblingsNum')}>
          More siblings!
        </button>
      </div>
    </div>
  )
}
```

## Functional setState

- The updater function returned from invoking useState can also take a function similar to the good ol’ setState:

```
const [value, updateValue] = useState(0)
// both forms of invoking "updateValue" below are valid 👇
updateValue(1);
updateValue(previousValue => previousValue + 1);
```

- This is ideal when the state update depends on some previous value of state.

Example :

```
const CounterFnSetState = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count value is: {count}</p>
      <button onClick={() => setCount(0)}>Reset</button>
      <button
        onClick={() => setCount(prevCount => prevCount + 1)}>
        Plus (+)
      </button>
      <button
        onClick={() => setCount(prevCount => prevCount - 1)}>
       Minus (-)
      </button>
    </>
  );
}
```

# Hooks and Class Lifecycle :

## Declaring a State Variable

- In a class, we initialize the count state to 0 by setting this.state to { count: 0 } in the constructor:

```
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
```

- In a function component, we have no this, so we can’t assign or read this.state. Instead, we call the useState Hook directly inside our component:

```
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
```

### What does calling useState do?

- It declares a “state variable”. Our variable is called count but we could call it anything else, like banana. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.

### What do we pass to useState as an argument?

- The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable. (If we wanted to store two different values in state, we would call useState() twice.)

### What does useState return?

- It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair. If you’re not familiar with the syntax we used, we’ll come back to it at the bottom of this page.

Now that we know what the useState Hook does, our example should make more sense:

```
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
}
```

- We declare a state variable called count, and set it to 0. React will remember its current value between re-renders, and provide the most recent one to our function. If we want to update the current count, we can call setCount.

<mark>Note<mark>

- You might be wondering: why is useState not named createState instead?

- “Create” wouldn’t be quite accurate because the state is only created the first time our component renders. During the next renders, useState gives us the current state. Otherwise it wouldn’t be “state” at all! There’s also a reason why Hook names always start with use.

### Reading State

- When we want to display the current count in a class, we read this.state.count:

```
  <p>You clicked {this.state.count} times</p>
```

- In a function, we can use count directly:

```
  <p>You clicked {count} times</p>
```

### Updating State

- In a class, we need to call this.setState() to update the count state:

```
<button onClick={() => this.setState({ count: this.state.count + 1 })}>
Click me
</button>
```

- In a function, we already have setCount and count as variables so we don’t need this:

```
<button onClick={() => setCount(count + 1)}>
Click me
</button>
```

### Recap

- Let’s now recap what we learned line by line and check our understanding.

```
1: import React, { useState } from 'react';
2:
3: function Example() {
4: const [count, setCount] = useState(0);
5:
6: return (
7: <div>
8: <p>You clicked {count} times</p>
9: <button onClick={() => setCount(count + 1)}>
10: Click me
11: </button>
12: </div>
13: );
14: }
```

- Line 1: We import the useState Hook from React. It lets us keep local state in a function component.
- Line 4: Inside the Example component, we declare a new state variable by calling the useState Hook. It returns a pair of values, to which we give names. We’re calling our variable count because it holds the number of button clicks. We initialize it to zero by passing 0 as the only useState argument. The second returned item is itself a function. It lets us update the count so we’ll name it setCount.
- Line 9: When the user clicks, we call setCount with a new value. React will then re-render the Example component, passing the new count value to it.
