import React from 'react';

const TodoForm = () => {
  return (
    <div className="row">
      <div className="col-sm-12 text-center">
        <input className="new-todo ng-pristine ng-valid ng-touched" placeholder="What needs to be done?" />
      </div>
    </div>
  );
}

export default TodoForm;
