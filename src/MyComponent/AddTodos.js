import React, { useState } from 'react'

export const AddTodos = ({addTodo}) => {
  const [Titl1, setTitle] = useState("");
  const [desc1, setDesc] = useState("");
  
  const submit = (e)=> {
  e.preventDefault();
  if (!Titl1 || !desc1) {
      alert("Title or Desc cannot be blank");
  }
  else{
  addTodo(Titl1,desc1);
   setTitle("");
   setDesc("");   
}
  }

    return (
      <div className='container my-3'>
          <h3>Add a todo:</h3>
    <form>
    <div className="mb-3">
      <label htmlFor="Title" className="form-label">Title</label>
      <input type="text" className="form-control" value={Titl1} onChange={(e)=> setTitle(e.target.value)} id="Titl" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
        
      <label htmlFor="Desc" className="form-label">Description</label>
      <input type="text" className="form-control" value={desc1} onChange={(e)=>setDesc(e.target.value)} id="desc" />
    </div>
    
    <button type="submit" className="btn btn-sm btn-success" onClick={submit}>Add Todo</button>
  </form>
  </div>
  )
}

//export default AddTodos
