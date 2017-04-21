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
      data: []
    }
    this.todoService = new TodoService();
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().then( todos => {
        this.setState( { data: todos } );
    } );

  }

  addTodo( val ) {
    this.todoService.create( new Todo({
      title: val
    }) ).then( response => {
      this.getTodos();
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
              <section className="main { this.state.data.length > 0? '':'hide'  }">
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

  handleRemove( id ) {

  }
}
