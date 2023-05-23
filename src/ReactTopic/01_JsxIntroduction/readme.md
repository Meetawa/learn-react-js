### Why jsx

- React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

- Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.

- React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

### Embedding Expressions in JSX

- we declare a variable called name and then use it inside JSX by wrapping it in curly braces

Example :<br/>

```diff
const name = 'Josh Perez';<br/>
const element = <tag> Hello, {name} </tag>;
```

Example :<br/>

- 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions<br/>

```diff
  function formatName(user) {<br/>
  return user.firstName + ' ' + user.lastName;<br/>
  }<br/>
  const user = {<br/>
  firstName: 'Harper',<br/>
  lastName: 'Perez'<br/>
  };<br/>

const element = (<br/>

<tag><br/>
Hello, {formatName(user)}!<br/>
</tag><br/>
);<br/>
```

- We split JSX over multiple lines for readability. While it isn’t required, when doing this, we also recommend wrapping it in parentheses to avoid the pitfalls of automatic semicolon insertion.

### JSX is an Expression Too

- After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

- This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

Example : <br/>
function getGreeting(user) {<br/>
if (user) {<br/>
return <tag>Hello, {formatName(user)}!</tag>;<br/>
}<br/>
return <tag>Hello, Stranger.</tag>;<br/>
}<br/>
