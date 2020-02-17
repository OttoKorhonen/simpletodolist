import React, {Component} from 'react';
import './App.css';
import Todotable from './components/Todolist'

function App() {
  const[description, setDescription] = React.useState({description: '', date: ''});
  const[todo, setTodo] = React.useState([]);

  const addTodo = (event) =>{
    event.preventDefault();
    setTodo([...todo, description]);
  }

  const inputChanged = (event)=>{
    setDescription({...description, [event.target.name]: event.target.value});
  }

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <h1>To do list</h1>
        <div id="input-container">
      Description: <input type="text" name="description" value={todo.description} onChange={inputChanged}></input>
      Date: <input type="date" name="date" value={todo.date} onChange={inputChanged}></input>
      <input type="submit" value="Add"></input>
      </div>
        </form>
        <table>
        <tbody>
          <div id="list-container">
        <tr><th>Date:</th><th>Description:</th></tr>
        </div>
          {
          todo.map((todo, index) =>
          <div id="list-container">
          <tr key={index}>
          <td>{todo.date}</td>
          <td>{todo.description}</td>
          </tr>
          </div>
          )}
          
        </tbody>
        </table>
      
    </div>
  );
}

export default App;
