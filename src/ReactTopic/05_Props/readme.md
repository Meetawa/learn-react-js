# React Props

- props stands for properties.
- Props are arguments passed into React components.
- Props are passed to components via HTML attributes.
- React Props are like function arguments in JavaScript and attributes in HTML.
- To send props into a component, use the same syntax as HTML attributes:

Example :

- Add a "brand" attribute to the Car element:

```
const myElement = <Car brand="Ford" />;
```

- The component receives the argument as a props object:

Example :

- Use the brand attribute in the component:

```
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}
```
