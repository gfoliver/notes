import React, { useState } from 'react';
import Global from './styles/global';
import Button from './styles/button';
import Note from './components/Note';
import usePersistedState from './hooks/usePersistedState';
import AddNote from '././components/AddNote'

function App() {

  const [notes, setNotes] = usePersistedState('notes', []);
  const [modalVisible, setModalVisible] = useState(false);

  function pushNote(note) {
    setNotes([...notes, note]);
  }

  function removeNote(index) {
    let newNotes = notes.filter((note, i) => i !== index);
    setNotes(newNotes);
  }

  return (
    <div className="App">
      <Global />
      <h1>Notes</h1>
      <Button onClick={() => setModalVisible(true)}>Add a Note</Button>
      <Button background="#E4E4E4">Completed Notes</Button>

      {modalVisible && (
        <AddNote dismissModal={() => setModalVisible(false)} pushNote={pushNote} />
      )}

      <div className="notes">
        {notes ? notes.map(
          (note, index) => (
            <Note 
              key={index}
              title={note.title} 
              content={note.content} 
              color={note.color} 
              removeNote={() => removeNote(index)}
            />
          )
        ) : <p>No notes were found</p>}
      </div>
    </div>
  );
}

export default App;
