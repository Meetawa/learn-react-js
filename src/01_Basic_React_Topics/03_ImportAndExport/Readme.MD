## What is export and import?

- Importing and exporting in React JS will help us write modular code, i.e., splitting code into multiple files. Importing allows using contents from another file, whereas exporting makes the file contents eligible for importing.

- The basic idea behind imports and exports is to exchange contents between several JavaScript files.

## Exporting

- Let’s use a file name.js with an object person and name as an attribute.
- Export the object in the current file to make this object usable in another file.

```diff
//name.js

const person = {
    name:'Kedar'
}

export default person;
```

- The snippet export default person informs us that we will receive the person object by default whenever we import from name.js.

- We can also export multiple elements from a file. Let’s consider an info.js file where we will individually export the age and the birth_country of the person above.

```diff
//info.js

export const age = 23;
export const birth_country = "India"
```

## Importing

- Similar to exporting, there are two ways to import.

  - Importing from default exports.
  - Importing from named exports.

- For example, we are creating a file app.js, and we want to use the contents from name.js and info.js.

- When importing from name.js, a default export can be done as shown below.

```diff
import person from './name.js'
//or use as below
import prs from './name.js`
```

- Since we have a default export, importing anything from that file will provide us with a person object.

- For imports from the info.js file, we will import from two different constants.
  - Therefore, we use {} to precisely target specific things from that file.
  - These are called named exports, as we import them by their name.

```diffm
import {age} from './info.js'
import {birth_country} from info.js'
As shown below, you can also use aliases while importing in the named exports.

import {birth_country as bc} from 'info.js'
```

- You will frequently be using these import and export features throughout React.

# Difference Between Named and Default Exports in React

```diff
export function MyComponent() {}
vs
export default MyComponent
```

- Exports without a default tag are Named exports.

- Exports with the default tag are Default exports.

- Using one over the other can have effects on your code readability, file structure, and component organization.

- Named and Default exports are not React-centric ideas. They are es6 features. However, this article will deal with the impacts they have in a React ecosystem.

## Named Exports

```diff
export const MyFunction = () => {
  ...body
}

// or

export function MyFunction() {}
```

- When you want to import a named component, you use the same name it was exported with. Names must be imported inside curly brackets.

```diff
import { MyFunction } from "./my-component"
```

### Opt-in Aliasing

- You can rename your exports with an alias if you have collisions in a file. This is scoped to the file doing the import.

```diff
import { MyComponent as MyComponentAlias } from "./my-component"
```

### Multiple Exports Per File

- Named exports allow multiple exports in a single file.

```diff
export const MyFunction1 = () => {};

export const MyFunction2 = () => {};

export const MyFunction3 = () => {};
```

- our import like.

```diff
import { MyFunction1, MyFunction2, MyFunction3 } from "./my-components"

```

### Typescript Benefits

- You can consolidate your named exports into a single index.ts file with Typescript.

- During module resolution, if the Typescript sees an index.ts file it will attempt to resolve all defined imports.

- if you wanted to simplify your imports, add an index.ts file into your ui-components directory
  - ui-components /
    - buttons.tsx
    - inputs.tsx
    - index.ts

```
export * from "./buttons";
export * from "./inputs";
```

## Default Exports

- Default exports are created by including a default tag in the export. Usually, you see default exports happen at the bottom of a file, but it’s possible to define them when your component is declared.

```
const MyComponent = () => {}

export default MyComponent

// or

function MyComponent() {}

export default MyComponent

// or

export default function() {}

// or

export default () => {}
```

- When importing a default export, you don’t use curly brackets.

```
import MyComponent from "./my-component"
```

### Default Aliasing

- When you import a default export, you can give it whatever name you want

```
import WhateverNameIsBest from "./my-component"

```

### Combining

- You can combine default and named exports in a single file.

```
export const NamedComponent1 = () => {};

export const NamedComponent2 = () => {};

const DefaultComponent = () => {};

export default DefaultComponent;
```

- Importing is the same, named exports are in curly brackets, default is plaintext.

```
import DefaultComponent, { NamedComponent1, NamedComponent2 } from "./component"

```
