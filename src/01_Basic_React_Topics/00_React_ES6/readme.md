# What is ES6?

- ES6 stands for ECMAScript 6.

- ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of - ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

## Why Should I Learn ES6?

- React uses ES6, and you should be familiar with some of the new features like:

  - Classes
  - Arrow Functions
  - Variables (let, const, var)
  - Array Methods like .map()
  - Destructuring
  - Modules
  - Ternary Operator
  - Spread Operator

# 1.Classes

- ES6 introduced classes.

- A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

```
Example
A simple class constructor:

class Car {
  constructor(name) {
    this.brand = name;
  }
}
```

- Notice the case of the class name. We have begun the name, "Car", with an uppercase character. This is a standard naming convention for classes.

### Now you can create objects using the Car class

```
Example
Create an object called "mycar" based on the Car class:

class Car {
  constructor(name) {
    this.brand = name;
  }
}

const mycar = new Car("Ford");
```

<mark>Note:</mark> The constructor function is called automatically when the object is initialized.

### Method in Classes

- You can add your own methods in a class:

```
Example
Create a method named "present":

class Car {
constructor(name) {
this.brand = name;
}

present() {
return 'I have a ' + this.brand;
}
}

const mycar = new Car("Ford");
mycar.present();
```

- As you can see in the example above, you call the method by referring to the object's method name followed by parentheses (parameters would go inside the parentheses).

### Class Inheritance

- To create a class inheritance, use the extends keyword.

- A class created with a class inheritance inherits all the methods from another class:

```
Example
Create a class named "Model" which will inherit the methods from the "Car" class:

class Car {
constructor(name) {
this.brand = name;
}

present() {
return 'I have a ' + this.brand;
}
}

class Model extends Car {
constructor(name, mod) {
super(name);
this.model = mod;
}
 show() {
return this.present() + ', it is a ' + this.model
}
}
const mycar = new Model("Ford", "Mustang");
mycar.show();
```

- The super() method refers to the parent class.

- By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.

# 2.Arrow Functions

- Arrow functions allow us to write shorter function syntax:

```
Example
Before:

hello = function() {
  return "Hello World!";
}
```

```
Example
With Arrow Function:

hello = () => {
return "Hello World!";
}

```

- It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

```

Example
Arrow Functions Return Value by Default:

hello = () => "Hello World!";

```

<mark>Note:</mark> This works only if the function has only one statement.

- If you have parameters, you pass them inside the parentheses:

```
Example
Arrow Function With Parameters:

hello = (val) => "Hello " + val;
```

- In fact, if you have only one parameter, you can skip the parentheses as well:

```
Example
Arrow Function Without Parentheses:

hello = val => "Hello " + val;
```

### What About this?

- The handling of this is also different in arrow functions compared to regular functions.

- In short, with arrow functions there is no binding of this.

- In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

- With arrow functions, the this keyword always represents the object that defined the arrow function.

- Let us take a look at two examples to understand the difference.

  - Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

  - The first example uses a regular function, and the second example uses an arrow function.

  - The result shows that the first example returns two different objects (window and button), and the second example returns the Header object twice.

```
Example
With a regular function, this represents the object that called the function:

class Header {
constructor() {
this.color = "Red";
}

//Regular function:
changeColor = function() {
document.getElementById("demo").innerHTML += this;
}
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
```

```
Example
With an arrow function, this represents the Header object no matter who called the function:

class Header {
constructor() {
this.color = "Red";
}

//Arrow function:
changeColor = () => {
document.getElementById("demo").innerHTML += this;
}
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);

Remember these differences when you are working with functions. Sometimes the behavior of regular functions is what you want, if not, use arrow functions.

```

# 3.Variables

- Before ES6 there was only one way of defining your variables: with the var keyword. If you did not define them, they would be assigned to the global object. Unless you were in strict mode, then you would get an error if your variables were undefined.

- Now, with ES6, there are three ways of defining your variables: var, let, and const.

### Var

```
Example
var

var x = 5.6;
```

- If you use var outside of a function, it belongs to the global scope.

- If you use var inside of a function, it belongs to that function.

- If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.

- var has a function scope, not a block scope.

### Let

```
Example
let

let x = 5.6;
```

- let is the block scoped version of var, and is limited to the block (or expression) where it is defined.

- If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.

- let has a block scope.

### Const

```
Example
const

const x = 5.6;
```

- const is a variable that once it has been created, its value can never change.

- const has a block scope.

- The keyword const is a bit misleading.

- It does not define a constant value. It defines a constant reference to a value.

- Because of this you can NOT:

  - Reassign a constant value
  - Reassign a constant array
  - Reassign a constant object

- But you CAN:

  - Change the elements of constant array
  - Change the properties of constant object

# 4.Array Methods

- React is the most popular front-end library at the moment. This makes it very important to understand some core concepts that will help you improve your development process. In this blog post, I’ve compiled some very popular array methods that are frequently used in react project. I trust you'll find this very helpful.

- First off, let’s consider what is an array method. Simply put, an array method is a method that can be called on an array to perform an action on or with that array. Here are a few javascript array methods used in react.

# must-know array methods in React

## .map()

- This array method takes in a function that will be called on each element in a given array and it returns a new set of an array without modifying the original array. Simply put, it helps us create a new set of array based on an existing one.

```
Quick Example

The code snippet below shows a new set of an array after using the map method to add 3 to each element in the numbers array.

const numbers = [1, 3, 5, 7];
const newNumbers = numbers.map( number => number + 3);
// newNumbers will be equal to ['4', '6', '8', '10']
```

## .reduce()

- This is a great array method that uses an accumulator to reduce all elements in an array to a single value. It basically takes in two augments, a callback function and an initial value, performs an action, and returns a single value, the value being any type i.e. object, array, string, integer. The call back function takes in two parameters namely: accumulator and current value.

```
Quick Example

The code snippet below shows a single or the cumulated value being returned, after using the reduce method to add the accumulated value with the current value, the function is iterating over.

const numbers = [1, 2, 3, 4, 5];
const newValue = numbers.reduce( (accumulator, currentValue)=> accumulator + currentValue);
console.log(newValue);
// newValue will return 15
```

- It is also worthy of mentioning that there are other cool features you can use the array method to do. For more on that, check the MDN docs for example of that. Be sure to thank me later😁

## .filter()

- Just as it sounds, it works similar to the way the .map() method works. It filters an array based on if an element in the array, meets the condition passed in the function and then, it returns an array.

```
Quick Example

const numbers = [1, 2, 3, 4, 5, 6, 7];
const newValue = numbers.filter( (number)=> number >= 3);
console.log(newValue);
// newValue will return [3, 4, 5, 6, 7]
```

## .includes()

- This method simply checks if an element exists in a given array and returns a boolean(true or false). Do note that there are some constraints with regards to the data types that the include method can check for. This is because of the way Javascript treats objects and primitive types.

```
Quick Example

const numbers = [1, 2, 3, 4, 5];
const newValue = numbers.includes(3);
console.log(newValue);
// newValue will return true
```

## .find()

- This method takes in a function that checks for a specific element in an array and returns the very first occurrence of the condition.

```
Quick Example

const numbers = [1, 2, 3, 4];
const newValue = numbers.find((number)=> number > 3 );
console.log(newValue);
// newValue will return 4

```

# 5.Destructuring

- To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.

- Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

- Destructuring makes it easy to extract only what is needed.

## Destructing Arrays

- Here is the old way of assigning array items to a variable:

```
Example
Before:

const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
```

- Here is the new way of assigning array items to a variable:

```
Example
With destructuring:

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
```

- When destructuring arrays, the order that variables are declared is important.

- If we only want the car and suv we can simply leave out the truck but keep the comma:

```
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles;
```

- Destructuring comes in handy when a function returns an array:

```
Example
function calculate(a, b) {
const add = a + b;
const subtract = a - b;
const multiply = a \* b;
const divide = a / b;

return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);
```

## Destructuring Objects

Here is the old way of using an object inside a function:

```
Example
Before:

const vehicleOne = {
brand: 'Ford',
model: 'Mustang',
type: 'car',
year: 2021,
color: 'red'
}

myVehicle(vehicleOne);
// old way
function myVehicle(vehicle) {
const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}
```

- Here is the new way of using an object inside a function:

```
Example
With destructuring:

const vehicleOne = {
brand: 'Ford',
model: 'Mustang',
type: 'car',
year: 2021,
color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({type, color, brand, model}) {
const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}
```

- Notice that the object properties do not have to be declared in a specific order.

- We can even destructure deeply nested objects by referencing the nested object then using a colon and curly braces to again destructure the items needed from the nested object:

```
Example
const vehicleOne = {
brand: 'Ford',
model: 'Mustang',
type: 'car',
year: 2021,
color: 'red',
registration: {
city: 'Houston',
state: 'Texas',
country: 'USA'
}
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
const message = 'My ' + model + ' is registered in ' + state + '.';
}
```

# 6.Spread And Rest Operator

## Spread Operator

- The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

```
Example
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
```

- The spread operator is often used in combination with destructuring.

```
Example
Assign the first and second items from numbers to variables and put the rest in an array:

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
```

- We can use the spread operator with objects too:

```
Example
Combine these two objects:

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
```

## Rest Operator

- The rest parameter is an improved way to handle function parameters, allowing us to more easily handle various inputs as parameters in a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array. With the help of a rest parameter, a function can be called with any number of arguments, no matter how it was defined. Rest parameter is added in ES2015 or ES6 which improved the ability to handle parameter.

```
Syntax:

//... is the rest parameter (triple dots)
function functionname(...parameters)
{
statement;
}
```

<mark>Note:</mark> When … is at the end of the function parameter, it is the rest parameter. It stores n number of parameters as an array. Let’s see how the rest parameter works:

Example: Let’s see how the rest parameter works:

```
    // Without rest parameter
    function fun(a, b){
        return a + b;
    }
    console.log(fun(1, 2)); // 3
    console.log(fun(1, 2, 3, 4, 5)); // 3
```

- Output:

3
3

- In the above code, no error will be thrown even when we are passing arguments more than the parameters, but only the first two arguments will be evaluated. It’s different in the case of the rest parameter. With the use of the rest parameter, we can gather any number of arguments into an array and do what we want with them.

Example: Javascript code demonstrating the addition of numbers using the rest parameter.

```
    // es6 rest parameter
    function fun(...input){
        let sum = 0;
        for(let i of input){
            sum+=i;
        }
        return sum;
    }
    console.log(fun(1,2)); //3
    console.log(fun(1,2,3)); //6
    console.log(fun(1,2,3,4,5)); //15
```

- Output:

3
6
15

- We were able to get the sum of all the elements that we enter in the argument when we call the fun() function. We get the sum of all the elements in the array by making use of the for..of loop which is used to traverse the iterable elements inside an array.

<mark>Note:</mark> The rest parameter has to be the last argument, as its job is to collect all the remaining arguments into an array. So having a function definition like the code below doesn’t make any sense and will throw an error.

```
    // non-sense code
    function fun(a,...b,c){
         //code
         return;
    }
```

- Let’s make use of the rest parameter with some other arguments inside a function, like this:

```
    // rest with function and other arguments
    function fun(a,b,...c){
        console.log(`${a} ${b}`); //Mukul Latiyan
        console.log(c);  //[ 'Lionel', 'Messi', 'Barcelona' ]
        console.log(c[0]); //Lionel
        console.log(c.length); //3
        console.log(c.indexOf('Lionel')); //0
    }
    fun('Mukul','Latiyan','Lionel','Messi','Barcelona');
```

- Output:

Mukul Latiyan
['Lionel', 'Messi', 'Barcelona']
Lionel
3
0

- In the above code sample, we passed the rest parameter as the third parameter, and then we basically called the function fun() with five arguments the first two were treated normally and the rest were all collected by the rest parameter hence we get ‘Lionel’ when we tried to access c[0] and it is also important to note that the rest parameter gives an array in return and we can make use of the array methods that the javascript provides us.

# 7.Modules

- JavaScript modules allow you to break up your code into separate files.

- This makes it easier to maintain the code-base.

- ES Modules rely on the import and export statements.

# Export

- You can export a function or variable from any file.

- Let us create a file named person.js, and fill it with the things we want to export.

- There are two types of exports:
  - 1.Named
  - 2.Default

### 1.Named Exports

- You can create named exports two ways. In-line individually, or all at once at the bottom.

```
Example
In-line individually:

person.js

export const name = "Jesse"
export const age = 40
All at once at the bottom:
person.js

const name = "Jesse"
const age = 40

export { name, age }
```

## 2.Default Exports

- Let us create another file, named message.js, and use it for demonstrating default export.

- You can only have one default export in a file.

```
Example
message.js

const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};

export default message;
```

# Import

- You can import modules into a file in two ways, based on if they are named exports or default exports.

- Named exports must be destructured using curly braces. Default exports do not.

```
Example
Import named exports from the file person.js:

import { name, age } from "./person.js";
```

```
Example
Import a default export from the file message.js:

import message from "./message.js";
```

# 8.Ternary Operator

- The ternary operator is a simplified conditional operator like if / else.

```
Syntax: condition ? <expression if true> : <expression if false>
```

Here is an example using if / else:

Example: Get your own React.js Server

- Before:

```
if (authenticated) {
renderApp();
} else {
renderLogin();
}
```

Here is the same example using a ternary operator:

Example

- With Ternary

```
authenticated ? renderApp() : renderLogin();
```
