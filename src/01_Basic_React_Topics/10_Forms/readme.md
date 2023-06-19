# Forms

- Just like in HTML, React uses forms to allow users to interact with the web page.
- HTML form elements work a bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:

```
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

- This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called “controlled components”.

# Adding Forms in React

- You add a form with React like any other element:

Example:

- Add a form that allows users to enter their name:

```
function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
```

- This will work as normal, the form will submit and the page will refresh.

- But this is generally not what we want to happen in React.

- We want to prevent this default behavior and let React control the form.

# Handling Forms

- Handling forms is about how you handle the data when it changes value or gets submitted.

- In HTML, form data is usually handled by the DOM.

- In React, form data is usually handled by the components.

- When the data is handled by the components, all the data is stored in the component state.

- You can control changes by adding event handlers in the onChange attribute.

- We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.

Example:

- Use the useState Hook to manage the input:

```
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
```

# Submitting Forms

- You can control the submit action by adding an event handler in the onSubmit attribute for the <form>:

Example:

- Add a submit button and an event handler in the onSubmit attribute:

```
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
```

# Multiple Input Fields

- You can control the values of more than one input field by adding a name attribute to each element.

- We will initialize our state with an empty object.

- To access the fields in the event handler use the event.target.name and event.target.value syntax.

- To update the state, use square brackets [bracket notation] around the property name.

```
Example:
Write a form with two input fields:

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input
        type="text"
        name="username"
        value={inputs.username || ""}
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
```

- Note: We use the same event handler function for both input fields, we could write one event handler for each, but this gives us much cleaner code and is the preferred way in React.

# Textarea

- The textarea element in React is slightly different from ordinary HTML.

```
In HTML the value of a textarea was the text between the start tag <textarea> and the end tag </textarea>.
```

```
<textarea>
  Content of the textarea.
</textarea>

```

- In React the value of a textarea is placed in a value attribute. We'll use the useState Hook to manage the value of the textarea:

```
Example:
A simple textarea with some content:

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
```

# Select

- A drop down list, or a select box, in React is also a bit different from HTML.

- in HTML, the selected value in the drop down list was defined with the selected attribute:

- HTML:

```
<select>
  <option value="Ford">Ford</option>
  <option value="Volvo" selected>Volvo</option>
  <option value="Fiat">Fiat</option>
</select>
```

- In React, the selected value is defined with a value attribute on the select tag:

Example:

- A simple select box, where the selected value "Volvo" is initialized in the constructor:

```
function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}
```

```
By making these slight changes to <textarea> and <select>, React is able to handle all input elements in the same way.
```

# Form In Class Component

# Controlled Components

```
In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
```

- We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

- For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:

```
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

- Since the value attribute is set on our form element, the displayed value will always be this.state.value, making the React state the source of truth. Since handleChange runs on every keystroke to update the React state, the displayed value will update as the user types.

- With a controlled component, the input’s value is always driven by the React state. While this means you have to type a bit more code, you can now pass the value to other UI elements too, or reset it from other event handlers.

# The textarea Tag

```
In HTML, a <textarea> element defines its text by its children:

<textarea>
  Hello there, this is some text in a text area
</textarea>
```

```In React, a <textarea> uses a value attribute instead. This way, a form using a <textarea> can be written very similarly to a form that uses a single-line input:

class EssayForm extends React.Component {
constructor(props) {
super(props);
this.state = {
value: 'Please write an essay about your favorite DOM element.'
};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

}

handleChange(event) {
this.setState({value: event.target.value});
}

handleSubmit(event) {
alert('An essay was submitted: ' + this.state.value);
event.preventDefault();
}

render() {
return (

<form onSubmit={this.handleSubmit}>
<label>
Essay:
<textarea value={this.state.value} onChange={this.handleChange} />
</label>
<input type="submit" value="Submit" />
</form>
);
}
}
```

- Notice that this.state.value is initialized in the constructor, so that the text area starts off with some text in it.

# The select Tag

```
In HTML, <select> creates a drop-down list. For example, this HTML creates a drop-down list of flavors:

<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

- Note that the Coconut option is initially selected, because of the selected attribute. React, instead of using this selected attribute, uses a value attribute on the root select tag. This is more convenient in a controlled component because you only need to update it in one place.

For example:

```
class FlavorForm extends React.Component {
constructor(props) {
super(props);
this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

}

handleChange(event) {
this.setState({value: event.target.value});
}

handleSubmit(event) {
alert('Your favorite flavor is: ' + this.state.value);
event.preventDefault();
}

render() {
return (

<form onSubmit={this.handleSubmit}>
<label>
Pick your favorite flavor:
<select value={this.state.value} onChange={this.handleChange}>
<option value="grapefruit">Grapefruit</option>
<option value="lime">Lime</option>
<option value="coconut">Coconut</option>
<option value="mango">Mango</option>
</select>
</label>
<input type="submit" value="Submit" />
</form>
);
}
}
```

```
Overall, this makes it so that <input type="text">, <textarea>, and <select> all work very similarly - they all accept a value attribute that you can use to implement a controlled component.

Note

You can pass an array into the value attribute, allowing you to select multiple options in a select tag:

<select multiple={true} value={['B', 'C']}>
The file input Tag
In HTML, an <input type="file"> lets the user choose one or more files from their device storage to be uploaded to a server or manipulated by JavaScript via the File API.

<input type="file" />
Because its value is read-only, it is an uncontrolled component in React. It is discussed together with other uncontrolled components later in the documentation.
```

# Handling Multiple Inputs

When you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name.

For example:

```
class Reservation extends React.Component {
constructor(props) {
super(props);
this.state = {
isGoing: true,
numberOfGuests: 2
};

    this.handleInputChange = this.handleInputChange.bind(this);

}

handleInputChange(event) {
const target = event.target;
const value = target.type === 'checkbox' ? target.checked : target.value;
const name = target.name;

    this.setState({
      [name]: value
    });

}

render() {
return (

<form>
<label>
Is going:
<input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
</label>
<br />
<label>
Number of guests:
<input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
</label>
</form>
);
}
}
```

- Note how we used the ES6 computed property name syntax to update the state key corresponding to the given input name:

```
this.setState({
[name]: value
});
```

- It is equivalent to this ES5 code:

```
var partialState = {};
partialState[name] = value;
this.setState(partialState);
```

- Also, since setState() automatically merges a partial state into the current state, we only needed to call it with the changed parts.

# Controlled Input Null Value

- Specifying the value prop on a controlled component prevents the user from changing the input unless you desire so. If you’ve specified a value but the input is still editable, you may have accidentally set value to undefined or null.

- The following code demonstrates this. (The input is locked at first but becomes editable after a short delay.)

```
ReactDOM.createRoot(mountNode).render(<input value="hi" />);

setTimeout(function() {
ReactDOM.createRoot(mountNode).render(<input value={null} />);
}, 1000);
```

# Alternatives to Controlled Components

- It can sometimes be tedious to use controlled components, because you need to write an event handler for every way your data can change and pipe all of the input state through a React component. This can become particularly annoying when you are converting a preexisting codebase to React, or integrating a React application with a non-React library. In these situations, you might want to check out uncontrolled components, an alternative technique for implementing input forms.

# Fully-Fledged Solutions

- If you’re looking for a complete solution including validation, keeping track of the visited fields, and handling form submission, Formik is one of the popular choices. However, it is built on the same principles of controlled components and managing state — so don’t neglect to learn them.
