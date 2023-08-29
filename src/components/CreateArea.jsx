import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


function CreateArea(props) {
    const [isExpanded, setexpanded] = useState(false);


    const [note, setNote ] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }
    function SubmitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();

    }
    function expand() {
        setexpanded(true);
    }
    return (
        <div>
        <form className="create-note">
        {isExpanded && (<input name="title" onChange={handleChange} value={note.title} placeholder="Title" />)}
        <textarea name="content" onClick={expand} onChange={handleChange} value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
        <Fab onClick={SubmitNote}><AddIcon /></Fab>
        </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;