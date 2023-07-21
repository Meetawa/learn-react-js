# UseEffect Hooks :

- The Effect Hook lets you perform side effects in function components
- Some examples of side effects are: fetching data, directly updating the DOM, and timers.

- useEffect accepts two arguments. The second argument is optional.

```
useEffect(<function>, <dependency>)
```

Let's use a timer as an example.

Example:Get your own React.js Server

- Use setTimeout() to count 1 second after initial render:

```
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
```
