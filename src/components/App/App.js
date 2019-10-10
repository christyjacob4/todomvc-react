import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";

const initialState = [
  {
    text: "React ES6 TodoMVC",
    completed: false,
    id: 0
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: initialState,
      gameID: null,
      player: 0,
      isAuth: true
    };
    console.log("APP PROP", this.props);
    console.log(this.state);
  }

  //   componentDidMount() {
  //       this.props.auth.checkAuthenticated().then((res) => {
  //           this.setState({isAuth : res})
  //             console.log("Authenticated " , res)
  //           }
  //     )}

  addTodo = text => {
    //  TODO  Add functionality to add to appwrite database
    const todos = [
      {
        id:
          this.state.todos.reduce(
            (maxId, todo) => Math.max(todo.id, maxId),
            -1
          ) + 1,
        completed: false,
        text: text
      },
      ...this.state.todos
    ];
    this.setState({ todos });
  };

  deleteTodo = id => {
    // TODO remove todo from db
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  };

  editTodo = (id, text) => {
    // Update todo to DB
    const todos = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, text } : todo
    );
    this.setState({ todos });
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
    clearCompleted: this.clearCompleted
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
