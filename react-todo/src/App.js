import React, { Component } from "react";
class App extends Component {
  state = { todos: ["clean car", "buy Bread", "Feed Fish", "Code"] };

  onTodoInput = (e) => {
    this.setState({ todoInput: e.target.value });
  };

  onAddClick = (e) => {
    const todos = [...this.state.todos];
    todos.push(this.state.todoInput);

    this.setState({ todos });
  };

  render() {
    const { todos } = this.state;
    console.log(this.state);

    return (
      <>
        <input type="text" onInput={this.onTodoInput} />
        <button onClick={this.onAddClick}>Add</button>
        {todos.map((todo) => {
          return <p>{todo}</p>;
        })}
      </>
    );
  }
}

export default App;
