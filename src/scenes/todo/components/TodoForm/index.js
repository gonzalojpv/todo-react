import React from 'react';

const TodoForm = ( { addTodo } ) => {

  let input;

  return (
    <div className="row">
      <div className="col-sm-12 text-center">
        <input
          className="new-todo ng-pristine ng-valid ng-touched"
          placeholder="What needs to be done?"
          ref={ node => {
            input = node;
          } }
          onKeyPress={ ( event ) => {

            if(event.key === 'Enter') {
              addTodo(input.value);
              input.value = '';
            }

          } } />
      </div>
    </div>
  );
}

export default TodoForm;
