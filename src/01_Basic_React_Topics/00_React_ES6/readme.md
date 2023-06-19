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

# Classes

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
