import { FETCH_NOTES_SUCCESS, ADD_NEW_NOTE_SUCCESS, SELECT_NOTE, UPDATE_NOTE_SUCCESS } from "../constants";

const notesReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_NOTES_SUCCESS:
            return state = {...state, notes: action.payload};
        
        case ADD_NEW_NOTE_SUCCESS:
            return state = {...state, notes: [...state.notes, action.payload]};
            
        case SELECT_NOTE:
            return state = {...state, selectedNote: action.payload};

        case UPDATE_NOTE_SUCCESS:
            let notes = state.notes.map((note, index) => {
                if(note.id === action.payload.id) {
                    return {
                        ...note,
                        title: action.payload.title,
                        body: action.payload.body
                    }
                }
                return note;
            });

            return state = { ...state, notes: notes };

        default:
            return state;
    }
}

export default notesReducer;