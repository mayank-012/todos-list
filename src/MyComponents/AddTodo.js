import React from "react";
import { useState } from "react";

export const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const submit = (e)=>{
        e.preventDefault();
        if(!title){
            alert("titleCanNotBeEmpty")
        }
        else{props.addTodo(title);}
    }
  return (
    <div className="container my-3">
        <h3>addAToDo </h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="title">toDoTitle</label>
          <input
            type="text"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="enterToDo"
          />
        </div>

        <button type="submit" className="btn btn-sm btn-success my-3">
          addToDo
        </button>
      </form>
    </div>
  );
};
