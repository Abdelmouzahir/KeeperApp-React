import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";

function Note(props) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [modifiedTitle, setModifiedTitle] = useState(props.title);
    const [modifiedContent, setModifiedContent] = useState(props.content);

    function handleClick() {
        props.onDelete(props.id);
    }

    function handleEditClick() {
        setIsEditMode(true);
    }

    function handleSaveClick() {
        props.onModify(props.id, {
            title: modifiedTitle,
            content: modifiedContent
        });
        setIsEditMode(false);
    }

    function handleTitleChange(event) {
        setModifiedTitle(event.target.value);
    }

    function handleContentChange(event) {
        setModifiedContent(event.target.value);
    }

    return (
        <div className="note">
            {isEditMode ? (
                <>
                    <input className="modify-input"
                        type="text"
                        value={modifiedTitle}
                        onChange={handleTitleChange}
                    />
                    <textarea className="modify-text"
                        value={modifiedContent}
                        onChange={handleContentChange}
                    />
                    <button onClick={handleSaveClick}><SaveIcon /></button>
                </>
            ) : (
                <>
                    <h1>{props.title}</h1>
                    <p>{props.content}</p>
                    <button onClick={handleClick}><DeleteIcon /></button>
                    <button onClick={handleEditClick}><EditIcon /></button>
                </>
            )}
        </div>
    );
}

export default Note;
