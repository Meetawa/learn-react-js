# Composition vs Inheritance

- React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.

- In this section, we will consider a few problems where developers new to React often reach for inheritance, and show how we can solve them with composition.

- Composition and inheritance are the approaches to use multiple components together in React.js . This helps in code reuse. React recommend using composition instead of inheritance as much as possible and inheritance should be used in very specific cases only.

Example to understand it −

Let’s say we have a component to input username.

# Inheritance

```
class UserNameForm extends React.Component {
   render() {
      return (
         <div>
            <input type="text" />
         </div>
      );
   }
}
ReactDOM.render(
   < UserNameForm />,
   document.getElementById('root'));
```

- This sis simple to just input the name. We will have two more components to create and update the username field.

- With the use of inheritance we will do it like −

```
class UserNameForm extends React.Component {
render() {
return (
<div>
<input type="text" />
</div>
);
}
}
class CreateUserName extends UserNameForm {
render() {
const parent = super.render();
return (
<div>
{parent}
<button>Create</button>
</div>
)
}
}
class UpdateUserName extends UserNameForm {
render() {
const parent = super.render();
return (
<div>
{parent}
<button>Update</button>
</div>
)
}
}
ReactDOM.render(
(<div>
< CreateUserName />
< UpdateUserName />

   </div>), document.getElementById('root')
);
```

- We extended the UserNameForm component and extracted its method in child component using super.render();

# Composition

```
class UserNameForm extends React.Component {
   render() {
      return (
         <div>
            <input type="text" />
         </div>
      );
   }
}
class CreateUserName extends React.Component {
   render() {
      return (
         <div>
            < UserNameForm />
            <button>Create</button>
         </div>
      )
   }
}
class UpdateUserName extends React.Component {
   render() {
      return (
         <div>
            < UserNameForm />
            <button>Update</button>
         </div>
      )
   }
}
ReactDOM.render(
   (<div>
      <CreateUserName />
      <UpdateUserName />
   </div>), document.getElementById('root')
);
```

- Use of composition is simpler than inheritance and easy to maintain the complexity.
