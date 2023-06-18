import React from "react";
class UserNameForm extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}
export class CreateUserName extends React.Component {
  render() {
    return (
      <div>
        <UserNameForm />
        <button>Create</button>
      </div>
    );
  }
}
export class UpdateUserName extends React.Component {
  render() {
    return (
      <div>
        <UserNameForm />
        <button>Update</button>
      </div>
    );
  }
}
