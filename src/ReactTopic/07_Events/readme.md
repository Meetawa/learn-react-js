# Handling Events

- Handling events with React elements is very similar to handling events on DOM elements.
  There are some syntax differences:
  - React events are named using camelCase, rather than lowercase.
  - With JSX you pass a function as the event handler, rather than a string.

# Example

- React events are written in camelCase syntax:

```
   // onClick instead of onclick.

```

- React event handlers are written inside curly braces:

```
  // onClick={shoot} instead of onClick="shoot()".

```

### Example

In HTML:

```

<button onclick="activateLasers()">
  Activate Lasers
</button>
```

In React:

```
<button onClick={activateLasers}>
  Activate Lasers
</button>
```
