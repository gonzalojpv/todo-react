import React from 'react';
import { Todo } from './todo';
import axios from 'axios';

export class TodoService extends React.Component {

  todos: Todo[] = [];

  constructor( props ) {

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

    this.apiUrl = 'http://apisilex.proof.code/tasks/'
    this.headers = {
      'auth':'jinto d0763edaa9d9bd2a9516280e9044d885',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    };
  }

  create( todo: Todo  ) {
    console.log('Service');
    console.log( todo );
  }

  getTodos() {

    return axios.get( this.apiUrl, {
      headers: this.headers
    } )
    .then(response => response.data)
    .catch( (error) => {
      console.log( "error" ,error );
    } );
  }
}
