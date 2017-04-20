import React from 'react'
import Title from "./components/Title";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { TodoService } from './services'
import { Todo } from './services/todo';
import './styles.css';

export default class TodoApp extends React.Component {
  constructor( props ) {
    // Pass props to parent class
    super(props);
    this.state = {
      data: [
        {
        id: 1,
        title: "Add new todos and come back any time later, I will save them for you!",
        user_id: 1,
        complete: false
      }
      ]
    }
    this.todoService = new TodoService();
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().then( todos => {
        this.setState( { data: todos } );
    } );

  }

  render() {
    // Render JSX
    return (
      <div className="container">
        <section className="todoapp">
          <Title/>
          <TodoForm addTodo={this.addTodo.bind(this)} />

          <div className="row">
            <div className="col-sm-12">
              <section className="main">
                <TodoList
                  todos={this.state.data}
                  remove={this.handleRemove.bind(this)}
                />
              </section>
            </div>
          </div>

          <Footer/>
        </section>
      </div>

    );
  }

  addTodo( val ) {
    this.todoService.create( new Todo({
      title: val
    }) );
  }

  handleRemove( id ) {

  }
}
