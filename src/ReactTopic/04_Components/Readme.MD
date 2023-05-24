# What is Component?

- Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

- Components come in two types, Class components and Function components

## Function Components

- A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.

Example :

- Create a Function component called Car

```diff
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}
```

## Class Component

- A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

- The component also requires a render() method, this method returns HTML.

Example :

```diff
// Create a Class component called Car

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
//React application has a component called Car, which returns a <h2> element.
```

### NOTE :

Header,Content,Footer are react components where we defined function(Header and Content) and class(Footer) component inside these files.

## Rendering a Component

```
function Welcome() {
  const name="rahulsaini"
  return <h1>Hello, {name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome />;
root.render(element);
```

- What happens in this example:
  - We call root.render() with the <Welcome /> element.
  - React calls the Welcome component with {name: 'Sara'}
  - Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
  - React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.

### Composing Components

- Components can refer to other components in their output.

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

#### NOTE

- NEXT SECTION WE UNDERSTAND PROPS
