import { useState } from "react";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

function NoteBook() {
  const [notes, setNotes] = useState([]);

  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} was toggled`);
  };

  return (
    <div>
      <h1>Notes</h1>
      <NoteList
        notes={notes}
        setNotes={setNotes}
        toggleImportanceOf={toggleImportanceOf}
      />
      <NoteForm notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default NoteBook;
