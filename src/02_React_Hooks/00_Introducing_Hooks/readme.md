# React Hooks :

- Hooks are a new addition in React 16.8. They let developers use state and other React features without writing a class For example- State of a component It is important to note that hooks are not used inside the classes.
- we must import Hooks from react.
- State generally refers to application data or properties that need to be tracked

# Why the need for Hooks

- There are multiple reasons responsible for the introduction of the Hooks which may vary depending upon the experience of developers in developing React product. Some of them are as follows:

## Use of ‘this’ keyword:

- The first reason has to do more with javascript than with React itself. To work with classes one needs to understand how ‘this’ keyword works in javascript which is very different from how it works in other languages. It is easier to understand the concept of props, state, and uni-directional data flow but using ‘this’ keyword might lead to struggle while implementing class components. One also needs to bind event handlers to the class components. It is also observed by the React developers team also observed that classes don’t concise efficiently which leads to hot reloading being unreliable which can be solved using Hooks.

## Reusable stateful logics:

- This reason touches advance topics in React such as Higher-order components(HOC) and the render props pattern. There is no particular way to reuse stateful component logic to React. Though this problem can be solved by the use of HOC and render props patterns it results in making the code base inefficient which becomes hard to follow as one ends up wrapping components in several other components to share the functionality. Hooks let us share stateful logic in a much better and cleaner way without changing the component hierarchy.

## Simplifying complex scenarios:

- While creating components for complex scenarios such as data fetching and subscribing to events it is likely that all related code is not organized in one place are scattered among different life cycle methods. For example, actions like data, fetching are usually done in componentDidMount or componentDidUpdate, similarly, in case of event listeners, it is done in componentDidMount or componentWillUnmount. These develop a scenario where completely different codes like data fetching and event listeners end up in the same code-block. This also makes impossible to break components to smaller components because of stateful logic. Hooks solve these problems by rather than forcing a split based on life-cycle method Hooks to let you split one component into smaller functions based on what pieces are related.

# Important things to remember while using hooks:

- Hooks are available for React version 16.8 or higher.
- Hooks are completely opt-in. Use it partially for a few components or base the whole project on it as per your needs without rewriting any existing code.
- Hooks don’t contain any breaking changes and are 100% backward-compatible.
- The react team has no plan to remove classes from React.
- Hooks can’t be used inside class components and but the app can definitely mix class-based components and functional components with Hooks.
- Hooks doesn’t violate any existing React concepts. Instead, Hooks provide a direct API to react concepts such as props, state, context, refs and life-cycle.

# Hook Rules

- There are 3 rules for hooks:
  - Hooks can only be called inside React function components.
  - Hooks can only be called at the top level of a component.
  - Hooks cannot be conditional

<mark>Note:</mark> Hooks will not work in React class components,but its work in function component
