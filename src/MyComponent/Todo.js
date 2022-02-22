import React from 'react'


export const Todo = ({todoList, onDelete}) => {
  localStorage.setItem("Name","Bond");
  let p = localStorage.getItem("Name");
  return (
    <div>
        <h5>{todoList.SerialNo}</h5>
        <h4>{todoList.Title}</h4>
        <p>{todoList.Description}</p>
        {/* <h3>{props.todoList[0].Description}</h3> */}
        {/* <p>Tu pyr ka sagar hai</p> */}
        {/* <p>{localStorage.getItem("Name")}</p> */}
        <button className='btn btn-sm btn-danger' onClick={() => onDelete(todoList)}>Delete </button>
  
    </div>
  )
}

//export default Todo
