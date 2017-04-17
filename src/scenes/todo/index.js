import React from 'react'
import Title from "./components/Title";
import TodoForm from "./components/TodoForm";
import Footer from "./components/Footer";
import './styles.css';

export default class Todo extends React.Component {
  constructor( props ) {
    // Pass props to parent class
    super(props);
  }

  render() {
    // Render JSX
    return (
      <div className="container">
        <section className="todoapp">
          <Title/>
          <TodoForm/>
          <Footer/>
        </section>
      </div>

    );
  }
}
