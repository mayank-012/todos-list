import React, {useState} from 'react';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';

function App() {
  const onDelete = (todo)=>{
      setTodos(todos.filter((e)=>{
        return e!==todo;
      }));
  }

  const addTodo = (title)=>{
    let sno = todos[todos.length-1].sno + 1 ;
    const myTodo = {
      sno: sno,
      title: title,
    }
    setTodos([...todos,myTodo])
    };



  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "goToMarket"
    },
    {
      sno: 2,
      title: "learnReact"
    },
    {
      sno: 3,
      title: "takeBath"
    },
  ]);
  return (
    <>
    <Header title = "toDosList" searchBar = {0}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  ); 
}

export default App;
