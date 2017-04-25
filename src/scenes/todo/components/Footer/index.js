import React from 'react';

const Footer = ({ todos }) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <footer className="footer">
          <div>
             <p className="text-center">Semantic Weapons 2017</p>
            <span className="todo-count"><strong>{todos.length}</strong> {todos.length === 1 ? 'item' : 'items'} left</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
