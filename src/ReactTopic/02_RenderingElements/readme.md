- Elements are the smallest building blocks of React apps.
- An element describes what you want to see on the screen:

```diff
const element = <h1>Hello, world</h1>;
```

- Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements

### Rendering an Element into the DOM

- Let’s say there is a <div> somewhere in your HTML file:

```diff
<div id="root"></div>
```

- We call this a “root” DOM node because everything inside it will be managed by React DOM.

- Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

- To render a React element, first pass the DOM element to ReactDOM.createRoot(), then pass the React element to root.render():

```diff
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const element = <h1>Hello, world</h1>;
root.render(element)
```
