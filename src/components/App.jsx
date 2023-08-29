import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App() {
    const [note , setNotes] = useState([]);

    function addNote(newnote){
    setNotes(prevNotes => {
        return [...prevNotes, newnote];
    })
    }
    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }
    function modifyNote(id, updatedNote){
        setNotes(prevNotes => {
            return prevNotes.map((noteItem, index) => {
                if(index === id){
                    return {...noteItem, ...updatedNote};
                }
                    return noteItem;
                
            });
        });

    }

    return (
        <div>
       <Header />
       <CreateArea 
        onAdd={addNote}
       />
        {note.map((noteItem, index) =>{
            return (
                <Note 
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
                onModify={modifyNote}
                />
            );
        })}
        <Footer />
        </div>
    );
}

export default App;