import { FETCH_NOTES, ADD_NEW_NOTE, SELECT_NOTE, UPDATE_NOTE } from "../constants"

export const fetchnotes = () => {
    return {
        type: FETCH_NOTES
    }
}

export const addnote = (payload) => {
    return {
        type: ADD_NEW_NOTE,
        payload: payload
    }
}

export const selectNote = (payload) => {
    return {
        type: SELECT_NOTE,
        payload: payload
    }
}

export const updateNote = (payload) => {
    return {
        type: UPDATE_NOTE,
        payload: payload
    }
}