### Why jsx

- React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

- Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.

- React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

### Embedding Expressions in JSX

- we declare a variable called name and then use it inside JSX by wrapping it in curly braces

Example :<br/>
const name = 'Josh Perez';<br/>
const element = <h1 tag>Hello, {name}</h1 tag>;

For example<br/> 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions
