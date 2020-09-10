import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Editor from "rich-markdown-editor";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { addnote, updateNote } from "../actions/notes";

// This model isn't efficient, we'll create the note and then send the user to edit page.

const CreateNoteForm = () => {

    const notesState = useSelector(state => state.notes);
    const { notes, selectedNote } = notesState;
    const dispatch = useDispatch();


    useEffect(() => {
        // Run this once to create a new note.
        dispatch(addnote({ title: "Untitled Note", body: "#hello world"}));
    },[])

    const handleChange = debounce(value => {
        const text = value();
        console.log(text);
        // save the note using dispatch
        dispatch(updateNote({ ...selectedNote, body: JSON.stringify(text) }));
    }, 500)

    return (
        <React.Fragment>
            {selectedNote ? (
                <>
                    <h3>{selectedNote.title}</h3>
                    <Editor
                        // defaultValue="Hello world!"
                        onSave={options => console.log("Save triggered", options)}
                        onChange={handleChange}
                        value={selectedNote.body}
                    />
                </>
                ) : (<p>Loading ...</p>)
            }
        </React.Fragment>
    )
}

export default CreateNoteForm;