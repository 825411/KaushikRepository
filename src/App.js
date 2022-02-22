import './App.css';
import Header from './MyComponent/Header'
import { Footer } from './MyComponent/Footer'
import { Todo } from './MyComponent/Todo'
import { Todos } from './MyComponent/Todos'
import { AddTodos } from './MyComponent/AddTodos'
import { About } from './MyComponent/About'

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes ,
  Link
} from "react-router-dom";


function App() {
  let initTodo;

  if (localStorage.getItem("todolist") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todolist"));

  }

  const addTodo = (Titl1, desc1) => {
    console.log("i am adding todo", Titl1, desc1);
    let Sn;
    if (TodoList.length == 0)
      Sn = 1
    else
      Sn = TodoList[TodoList.length - 1].SerialNo + 1;
    const mytodo = {
      SerialNo: Sn,
      Title: Titl1,
      Description: desc1,
    }
    console.log("I am printing", TodoList);
    settodos([...TodoList, mytodo]);
    console.log("I am adding", mytodo);


  }

  const onDelete = (t1) => {

    console.log("I am on delete", t1);
    settodos(TodoList.filter((e) => {
      return e !== t1;
    }))
    localStorage.setItem("todolist", JSON.stringify(TodoList));

  }


  let test = 1;
  const [TodoList, settodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(TodoList));
  }, [TodoList]);
  return (
    <>
      <Router>
        <Header title = " my to do list" searchBar = {true}/>
<AddTodos addTodo = {addTodo}/>
        <Todos todoList={TodoList} onDelete={onDelete} />

        {/* <Routes>

          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodos addTodo={addTodo} />
                <Todos todoList={TodoList} onDelete={onDelete} />

              </>)
          }}>

          </Route>
          <Route path="/about">
        <About /> 
          </Route>
        </Routes> */}



        <Footer />

      </Router>
    </>
  );

}

export default App;
