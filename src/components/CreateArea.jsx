import React, { useState } from "react";

function CreateArea(props) {


  const [note, setNote] =  useState({title:"",content:""});

  function hChange(event){
    const{name, value} = event.target;

    setNote(prevNote =>{
      return{
        ...prevNote,[name]:value
      };
    });
  }

  function addNote(event){
    props.onAdd(note);
    event.preventDefault();

    setNote({title: "", content: ""});
    
  }
  return (
    <div>
      <form>
        <input onChange={hChange} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={hChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
