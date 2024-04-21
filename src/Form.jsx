import React, { useState } from 'react'
import "./Form.css";

function Form() {
    let [input, setInput] = useState("");

    let handleChange = (event) => {
        setInput(event.target.value);
    }
   const handleSubmit = (event) => {
event.preventDefault();
   }
  return (
    <form onSubmit={handleSubmit}>
    <div className="container1">
<div className="form">

    <div className="parent">
    <div className="left">
<input type='text' placeholder='enter here name' 
value={input} onChange={handleChange}/>
 <br></br><br></br>

<input type='text' placeholder='password' />
<br></br> <br></br> <br></br>

<button type='submit'>Submit</button>
</div>
<div className="right">
    <img src="\src\man-and-woman-hold-pens-and-write-vector-47704694.jpg" />
</div>



</div>
</div>
    </div>
    </form>
  )
}

export default Form
