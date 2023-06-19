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

# More About

# Composition VS Inheritance

- The techniques for using several components together are done by composition and inheritance in React. This facilitates code reuse. React recommends using composition instead of inheritance as far as feasible, and inheritance should only be utilized in particular instances.

- The ‘is-a relationship’ mechanism was used in inheritance. Derived components had to inherit the properties of the base component, which made changing the behaviour of any component quite difficult. The composition aspires to be better. Why not inherit only behaviour and add it to the desired component instead of inheriting properties from other components?

- Only the behaviour is passed down from composition without the inheritance of properties. Why is this a plus point? It was challenging to add new behaviour via inheritance as the derived component inherited all of the parent class's properties, making it impossible to add new behaviour. More use cases had to be included. However, we only inherit behaviour in composition, and adding new behaviour is relatively easy.

- React proposes utilizing composition instead of inheritance to reuse code between components because React has an advanced composition model. Between Composition and Inheritance in React, we can distinguish the following points:

- We can overuse ‘inheritance’.
  - ‘Behavior’ composition can be made simpler and easier.
  - Composition is preferred over deep inheritance in React.
  - Inheritance inherits the properties of other components, whereas composition merely inherits the behaviour of other components.
- - It was difficult to add new behaviour via inheritance since the derived component inherits all of the parent class's properties, making it impossible to add new behaviour.

# Composition: Using Props.children

- Some parent components aren't aware of their children in advance. This is especially typical for components that represent generic ‘boxes’, such as ‘Sidebar’ or ‘DialogBox’.

- Such components transmit the children elements directly into their output using the special children prop. By nesting the JSX(Javascript XML), other components can send arbitrary children to them.

- Anything inside the JSX tag <CustomisedBorder> gets supplied as a children prop to the CustomisedBorder component. The provided items appear in the final result because CustomisedBorder renders the {props.children} inside a <div>.

```
function CustomisedBorder(props){
    return(
        <div className = {'CustomisedBorder CustomisedBorder-' +
        props.color}>
            {props.children}
        </div>
    );
}

function DialogWelcome(){
    return(
        <CustomisedBorder color = "red">
            <h1 className = "title">
                Welcome to CodeStudio!
            </h1>
            <p className = "message">
                Thank you for visiting! Have a good day!
            </p>
        </CustomisedBorder>
    );
}

```

- From this, we can draw the conclusion that-

- Within <CustomisedBorder>, all components become {props.children}.
  For layout/style, the parent component can wrap the children in a <div> tag.
  Composition: Child Groups
- Although uncommon, multiple "holes" in a component may be required on occasion. Instead of using children, we can create our own convention.

- <Problems /> and <Code Editor /> are some React elements that can be passed as props just like any other data. This method reminds us of the ‘slots’ in other frameworks/libraries, but what we may send as props in React is unrestricted, and there are no limitations.

```
function DSAPractice(props){
    return(
        <div className = "DSAPractice">
            <div className = "DSAPracticeLeft">
                {props.left}
            </div>
            <div className = "DSAPracticeRight">
                {props.right}
            </div>
        </div>
    );
}

function Application(){
    return(
        <DSAPractice
        left={<Problems />}
        right={<Code Editor />} />
    );
}

```

- From this, we can draw the conclusion that-

- Children can appear in several locations in some components.
  Assign the child components to the prop names as it will help us in organizing.
  Composition: Classes

- Components are sometimes thought of as "special cases" of other components. A WelcomeDialog, for example, could be considered a subset of Dialog.

- In React, this is also accomplished through composition, in which a more "particular" component renders and configures a more "generic" one with props.

```
function Dialog(props){
    return(
        <CustomisedBorder color = "red">
            <h1 className = "DialogTitle">
                {props.title}
            </h1>
            <p className = "DialogMessage">
                {props.message}
            </p>
            {props.children}
        </CustomisedBorder>
    );
}

class DialogSignUp extends react.Component{
    construct(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleSignUp=this.handleSignUp.bind(this);
        this.state={course: ''};
    }

    handleChange(e){
        this.setState({course: e.target.value});
    }

    handleSignUp(){
        alert('Welcome to the ${this.state.course}! course');
    }

    render(){
        return(
            <Dialog title = "Higher Studies Program"
                    message = "Which course are you interested in?">
                <input value={this.state.course}
                      onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}>
                    Sign Here!
                </button>
            </Dialog>
        );
    }
}

```

- The composition also works for components that are declared as classes.

- From this, we can draw the conclusion that-

  - Stateless Functions and Classes are both used together.
  - Specific Components can configure general Components.
  - Props can be used for configuration.

# Implementing Inheritance

- The keyword extends is used in inheritance. It allows the current component to use the methods and properties of an already existing component. Let’s see how to implement inheritance in React.

## ParentClass:

```
import React from "react";

class ParentFunction extends React.Component{
    constructor(props){
        super(props);
        this.course = this.course.bind(this);
    }

    // Parent class function
    course(){
        console.log("This is the course you chose!");
    }

    render(){
        return false;
    }
}

```

- The newly created Parent component itself uses the inheritance as the ParentClass extends the component from React as React.Component.

## ChildComponent:

```
export default class ChildFunction extends ParentFunc{
constructor(){
super();
}

    render(){

        // Parent component's properties are accessed by child component
        this.course();
        return false;
    }

}
```

- Here the ChildFunction component extends the ParentFunction component. Here in the child class, the this.course() function is called from the parent class implementation.

# Why not Component Inheritance?

Component inheritance hierarchies may be useful in creating reusable non-UI components, but a functional component is better off being isolated into its own JavaScript module.

# Why Composition over Inheritance?

There are a few primary reasons why we should use composition over inheritance when developing React apps.

The first is the option of avoiding excessively nested components.
We can segregate code in different places, thanks to {props.children}. We don't need to go too deeply into the components and create a lot of ‘ifs’.
The next point is crucial. When it comes to composition, we use React's ‘everything is component’ concept.
Because we don't interact, it's safer to use composition in React.
We can still utilize them with a little inheritance, like when building composed high-order components (HOC).

# Approach to Composition- HOC(Higher Order Components)

A function which takes a component and returns another component is known as a Higher Order Component (HOC). Inserting new props or context is one use case. This is a more complex technique that React uses.

Composition and inheritance in React both aim for code reuse and a more organized code structure.
