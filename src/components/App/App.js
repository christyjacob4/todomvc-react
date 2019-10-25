import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";
import { config } from "../../Helpers/config";

const initialState = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: initialState,
      gameID: null,
      player: 0
    };
    // this.props.db.createCollection('tasks_3', config.apiKey );
    console.log("APP PROP", this.props);
    console.log(this.state);
  }

  // Get Todos
  componentDidMount() {
    console.log("[INFO] IN COMPONENT DID MOUNT");
    this.props.db
      .getTodos()
      .then(response => {
        const todos = response.documents;
        console.log(todos);
        this.setState({ todos });
      })
      .catch(err => {
        console.log("[INFO] Error", err);
      });
  }

  // Add New todos
  addTodo = text => {
    var data = {
      completed: false,
      text: text
    };

    console.log("[INFO] IN ADD TODO", data);

    this.props.db
      .addTodo(data)
      .then(response => {
        console.log(response);
        const todos = [data, ...this.state.todos];
        this.setState({ todos });
      })
      .catch(err => {
        console.log("[ERROR] ", err);
      });
  };

  // Delete Todo
  deleteTodo = id => {
    this.props.db
      .deleteTodo(id)
      .then(response => {
        console.log("[INFO] response", response);
        const todos = this.state.todos.filter(todo => todo["$uid"] !== id);
        this.setState({ todos });
      })
      .catch(err => {
        console.log("[ERROR] ", err);
      });
  };

  // Edit Todo
  editTodo = (id, text) => {
    console.log(id, text);
    const data = {
      text: text
    };

    this.props.db
      .updateTodo(id, data)
      .then(response => {
        console.log("[INFO] response", response);
        const todos = this.state.todos.map(todo =>
          todo["$uid"] === id ? response : todo
        );
        this.setState({ todos });
      })
      .catch(err => {
        console.log("[ERROR] ", err);
      });
  };

  completeTodo = id => {
    // Mark todo as completed
    const todos = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos });
  };

  completeAll = () => {
    const areAllMarked = this.state.todos.every(todo => todo.completed);
    const todos = this.state.todos.map(todo => {
      return { ...todo, completed: !areAllMarked };
    });
    this.setState({ todos });
  };

  clearCompleted = () => {
    const todos = this.state.todos.filter(todo => todo.completed === false);
    this.setState({ todos });
  };

  actions = {
    addTodo: this.addTodo,
    deleteTodo: this.deleteTodo,
    editTodo: this.editTodo,
    completeTodo: this.completeTodo,
    completeAll: this.completeAll,
    clearCompleted: this.clearCompleted,
    getTodo: this.getTodo
  };

  render() {
    console.log("Authenticated");
    return (
      <div>
        <Header addTodo={this.actions.addTodo} props={this.props} />
        <MainSection todos={this.state.todos} actions={this.actions} />
      </div>
    );
  }
}

export default App;
