# Lists and Keys

- In React, you will render lists with some type of loop.
- Given the code below, we use the map() function to take an array of numbers and double their values. We assign the new array returned by map() to the variable doubled and log it:

```
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
```

- This code logs [2, 4, 6, 8, 10] to the console.

- In React, transforming arrays into lists of elements is nearly identical.
