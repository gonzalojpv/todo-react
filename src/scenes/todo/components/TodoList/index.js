import React from 'react';

const Todo = ({todo, remove}) => {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" id="check-{ todo.id }" />
        <label htmlFor="check-{ todo.id }">{ todo.title }</label>
        <button className="destroy"></button>
      </div>
    </li>
  );
}

const TodoList = ({todos, remove}) => {
  console.log( todos );
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove}/>)
  });
  return (<ul className="todo-list">{todoNode}</ul>);
}


export default TodoList;
