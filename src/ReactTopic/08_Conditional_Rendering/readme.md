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
