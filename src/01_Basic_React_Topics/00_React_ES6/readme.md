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

### Now you can create objects using the Car class:

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
