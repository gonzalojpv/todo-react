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

  create( todo: Todo ) {

    todo.complete = todo.complete ? 1: 0 ;
    let params = this.serialize( todo );

    return axios.post( this.apiUrl, params, { 'headers': this.headers} )
      .then( response => response.data )
      .catch( (error) => {
        console.log( "error" ,error );
      } );
  }

  update( todo: Todo ) {

    const url = `${this.apiUrl}${todo.id}`;
    let params = this.serialize( todo );

    return axios
      .put( url, params,  { 'headers': this.headers } )
      .then( () => todo )
      .catch( (error) => {
        console.log( "error" ,error );
      } );
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

  delete( id: number ) {

    const url = `${this.apiUrl}${id}`;

    return axios
      .delete( url, { headers: this.headers } )
      .then( response => response.data )
      .catch( (error) => {
        console.log( 'Error:', error );
      } );

  }

  /**
  * Serializes the form element so it can be passed to the back end through the url.
  * The objects properties are the keys and the objects values are the values.
  * ex: { "a":1, "b":2, "c":3 } would look like ?a=1&b=2&c=3
  * @param  {SystemSetup} obj - The system setup to be url encoded
  * @returns URLSearchParams - The url encoded system setup
  */
  serialize(obj: Task): URLSearchParams {
    let params: URLSearchParams = new URLSearchParams();

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var element = obj[key];

            params.set(key, element);
        }
    }
    return params;
  }
}
