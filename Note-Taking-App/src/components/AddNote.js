import {useState} from 'react';

const AddNote = ( {handleAddNote}) => {
    const [noteHead, setNoteHead] = useState('');
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;
    const headingLimit = 15; 
    

    
    const handleChangeHead = (e) => {
        if(headingLimit - e.target.value.length >= 0) {
            setNoteHead(e.target.value);
        }
    };

    const handleChange = (e) => {
        if(characterLimit - e.target.value.length >= 0 ) {
            setNoteText(e.target.value);
        }
    };
    
    const handleSave = () => {
        if(noteText.trim().length > 0 && noteHead.trim().length > 0){
            handleAddNote(noteHead, noteText);
            
            //console.log(noteHead);
            setNoteHead('');
            setNoteText('');
            //console.log(noteHead);
        };
    };
    

    return(
        <div className="note new bg-emerald-400 rounded p-4 min-h-[130px] flex flex-col justify-between">

            <textarea rows="2"
            cols="10"
            placeholder="Add Title . . . "
            className="border-none resize-none bg-emerald-400 focus:outline-none "
            onChange={handleChangeHead}
            value={noteHead}>
            
            </textarea>
            <div className="note-footer flex justify-between items-center">
            <small>{headingLimit-noteHead.length} Remaining</small>
            </div>
            <textarea rows="5" cols="10"
            placeholder="Type here to add a note . . ."
            className="border-none resize-none bg-emerald-400 focus:outline-none "
            onChange={handleChange}
            value={noteText} 
            ></textarea>
            <div className="note-footer flex justify-between items-center">
                <small>{characterLimit-noteText.length} Remaining</small>
                <div className="flex justify-between items-center">
                <button className='save bg-neutral-300 border-none
                 rounded-xl px-4 py-[2px] font-semibold
                 hover:bg-neutral-400 cursor-pointer' 
                 onClick={handleSave}>Save</button>
                 </div>
            </div>
        </div>
    );
};

export default AddNote;