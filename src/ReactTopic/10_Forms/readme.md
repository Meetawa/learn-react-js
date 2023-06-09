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
