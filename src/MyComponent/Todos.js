import React from 'react'
import { Todo } from './Todo'
const t= [2,3,4];
export const Todos = (props) => {
  return (
    <div className = 'container'>
      <h3 className='my-3' >Todos List </h3>
      {/* <h3 className='text-center my-3' >{t.map((test1)=>{return test1 *2})}</h3> */}
      {/* <Todo todoList ={props.todoList[0]}/> */}
     
     {props.todoList.length == 0 ? "No To Dos to display" : props.todoList.map((test1)=> {

return <Todo todoList={test1} key = {test1.SerialNo} onDelete={props.onDelete}/>
})}
      {}
     
    </div>
  )
}

//export default Todos