import {useState, useEffect } from 'react';
import {nanoid} from 'nanoid';
import NoteList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
//import Sidebar from './components/Sidebar';



const App = () => {

  const [notes, setNotes] = useState(()=> {
    return JSON.parse(localStorage.getItem('react-notes-app-data')) || []
  });
    
     const [searchText, setSearchText] = useState('');
     const [darkMode, setDarkMode] = useState(false);
    


     useEffect(() => {
      localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
     }, [notes]);
     
     
     const addNote = (heading, text) => {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        heading: heading,
        text: text,
        date: date.toLocaleDateString(),
      };
 
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
     };


     const deleteNote = (id) => {
      const newNotes = notes.filter((note)=> note.id !== id);
      setNotes(newNotes);
     }
     console.log(notes[0]);

    // const pinNote = (id) => {
    //   const temp = notes.find(note => note.id === id);
    //   //console.log(temp);
    //   // console.log(notes);
    //   notes.unshift(temp);
    //   //console.log(notes)
    // }





  return(
    <div className={`mx-auto min-h-screen ${darkMode && 'dark-mode'}`}>
    

    <div className="container mx-auto min-h-[960px] px-[15px]">
    <Header handleToggleBtn={setDarkMode} />
      <Search handleSearchNote={setSearchText}/>
      
      
      {/* Normal Note List */}
      <NoteList note={notes.filter((note) => note.heading.toLowerCase().includes(searchText)
      )}

       handleAddNote={addNote}
       handleDelNote={deleteNote}
      //  handlePinNote={pinNote}
       />
    </div>
    </div>
  )
}

export default App;