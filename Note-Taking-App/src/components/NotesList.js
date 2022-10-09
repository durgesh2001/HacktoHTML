import AddNote from './AddNote';
import Note from "./Note";


const NoteList = ({ note, handleAddNote, handleDelNote, handlePinNote }) => { 

    return(
        
        <div className="note-list grid gap-2 mx-auto " >

        {note.map((notes)=>(           
        <Note id={notes.id}
              heading={notes.heading}
              text={notes.text}
              date={notes.date}
              handleDelNote={handleDelNote}
              handlePinNote={handlePinNote}
              />)
        )}
        <AddNote handleAddNote={handleAddNote}/>

        </div>
    );
};

export default NoteList;