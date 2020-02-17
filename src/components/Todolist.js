import React from 'react';

export default function Todolist(props){
    return(
      <div>
        <table>
        <tbody>
          <div id="list-container">
        <tr><th>Date:</th><th>Description:</th></tr>
        </div>
          {
          props.todo.map((todo, index) =>
          <tr key={index}>
          <td>{todo.date}</td>
          <td>{todo.description}</td>
          </tr>
          )}
        </tbody>
        </table>
      </div>
    );
}