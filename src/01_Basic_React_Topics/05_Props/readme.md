# React Props

- props stands for properties.
- Props are arguments passed into React components.
- Props are passed to components via HTML attributes.
- React Props are like function arguments in JavaScript and attributes in HTML.
- To send props into a component, use the same syntax as HTML attributes:

Example :

- Add a "brand" attribute to the Car element:

```
const myElement = <Car brand="Ford" />;
```

- The component receives the argument as a props object:

Example :

- Use the brand attribute in the component:

```
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}
```

# Pass Data

- Props are also how you pass data from one component to another, as parameters.

Example :

- Send the "brand" property from the Garage component to the Car component:

```
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

- If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets:

Example :

- Create a variable named carName and send it to the Car component:

```
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carName } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

- Or if it was an object:

Example :

- Create an object named carInfo and send it to the Car component:

```
function Car(props) {
  return <h2>I am a { props.brand.model }!</h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carInfo } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

## Note:

- React Props are read-only! You will get an error if you try to change their value.
- please watch these file which make in this directory

# What is Destructuring?

- Destructuring is a characteristic of JavaScript, It is used to take out sections of data from an array or objects, We can assign them to new own variables created by the developer.
- In destructuring, It does not change an array or any object, it makes a copy of the desired object or array element by assigning them in its own new variables, later we can use this new variable in React (class or functional) components.
- It makes the code more clear. When we access the props using this keyword, we have to use this/ this.props throughout the program, but by the use of restructuring, we can discard this/ this.props by assigning them in new variables.
- This is very difficult to monitor props in complex applications, so by assigning these props in new own variables we can make a code more readable.

# Advantages of Destructuring:

- It makes developer’s life easy, by assigning their own variables.
- Nested data is more complex, it takes time to access, but by the use of destructuring, we can access faster of nested data.
- It improves the sustainability, readability of code.
- It helps to cut the amount of code used in an application.
- It trims the number of steps taken to access data properties.
- It provides components with the exact data properties.
- It saves time from iterate over an array of objects multiple times.
- In ReactJS We use multiple times ternary operators inside the render function, without destructuring it looks complex and hard to access them, but by the use of destructuring, we can improve the readability of ternary operators.

# How to use Destructuring?

We can use the Destructuring in the following method in ReactJS:

# 1. Using this.props method

In this example, we are going to simply display some words using destructuring and without destructuring.

# Project Structure:

It will look like the following.

<h2>Destructuring</h2> gives access to the use of props in a more readable format and discards the need for props for every property.

App.js: Now write down the following code in the App.js file. Here, App is our default component where we will print our component code.

```
import React from "react"
import Greet from './component/Greet'

class App extends React.component{
render(){
return(

<div className = "App">
<Greet active="KAPIL GARG"  activeStatus = "CSE"/>
</div>
);
}
}
export default App;
```

- Greet.js: In this file, We will write component code about the destructuring process.

# Without Destructuring:

```
import React from 'react';

const Greet = props =>{
return (

<div>
<div className="XYZ">
<h3> {props.active} </h3>
</div>

            <div className="PQR">
                <h1>{props.activeStatus}</h1>
            </div>
        </div>
        )

}
export default Greet;
```

- Output: Here props are unnecessarily coming again inside the return, so more concise names of these Destructuring properties are used.

# Output for Without Destructuring

# With Destructuring:

```
import React from 'react';

const Greet = props =>{
// Destructuring
const {active, activeStatus} = props;
return (

<div>
<div className="XYZ">
<h3> {active} </h3>
</div>

            <div className="PQR">
                <h1>{activeStatus}</h1>
            </div>
        </div>
        )

}
export default Greet;
```

- Output:

Output for With Destructuring

# 2. Using the Extraction method:

- There are many times when the value extracted during Destructuring no more exist, then in this condition we can use of default behavior of Destructuring, in this, apply a default value to the newly declared properties of Destructuring

- In the following code, the activeObject will be set true if it is undefined in this.props.

- Const {active, activeStatus, activeObject = true } = this.props 3. Using the Re-assigning method:

- A variable name that is not a copy of the property being destructured may be used. This is achieved by reassigning as shown below.

- In the following code, the properties active, activeStatus have been destructured and reassigned as variables named generating, objectMessage.

- const { active : generating, activeStatus : objectMessage} = this.props
