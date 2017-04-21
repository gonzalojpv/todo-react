import React from 'react';

const Todo = ({todo, toggle, remove}) => {
  return (
    <li className={ todo.complete? 'completed':'' }>
      <div className="view">
        <input className="toggle"
          onClick={ () => {
            toggle( todo );
          }}
          type="checkbox" id={ 'check-' + todo.id } />
        <label htmlFor={ 'check-' + todo.id }>{ todo.title }</label>
        <button className="destroy" onClick={ ()=> {
            remove( todo.id );
          } }></button>
      </div>
    </li>
  );
}

const TodoList = ({todos, toggle, remove}) => {
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove} toggle={toggle} />)
  });
  return (<ul className="todo-list">{todoNode}</ul>);
}


export default TodoList;
