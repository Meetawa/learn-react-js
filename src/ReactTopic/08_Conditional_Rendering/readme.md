# Conditional Rendering

- Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

- Consider these two components:

```
function UserGreeting(props) {
return <h1>Welcome back!</h1>;
}
```

```
function GuestGreeting(props) {
return <h1>Please sign up.</h1>;
}
```

# if Statement

- We can use the if JavaScript operator to decide which component to render.

Example:

- Now, we'll create another component that chooses which component to render based on a condition:

```
function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);
```

- Try changing the isGoal attribute to true:

Example:

```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={true} />);
```
