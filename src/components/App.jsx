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


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote2} />
     { noteArr.map((noteItem) =>{
        return <Note
          title={noteItem.title}
          content={noteItem.content}
        />
      })}

      <Footer />
    </div>
  );
}

export default App;
