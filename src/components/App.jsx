import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteArr,setNoteArr] = useState([]);

  function addNote2(note){
    setNoteArr(prevNotes=>{
      return [...prevNotes,note];
    })
  }

  function deleteNote(id){
    setNoteArr(prevNotes =>{
      return prevNotes.filter((noteItem,index)=>{
        return index !== id;
      })
    })
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote2} />
     { noteArr.map((noteItem, index) =>{
        return <Note
          id={index}
          key={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote} 
        />
      })} 

      <Footer />
    </div>
  );
}

export default App;
