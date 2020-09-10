import { put, all, takeEvery, call, takeLatest } from "redux-saga/effects";
import { FETCH_NOTES_SUCCESS, FETCH_NOTES, ADD_NEW_NOTE, ADD_NEW_NOTE_SUCCESS, SELECT_NOTE, UPDATE_NOTE, UPDATE_NOTE_SUCCESS } from "./constants";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://notesmaker.test';
axios.defaults.headers.common = { 'Authorization' : "Bearer 2|sEF0bzRUF31012MRvUQRaCwIImzVv4p6hlzKi4YH"};

function fetchNotesApi() {
    return axios.get('/api/notes/get-all-notes');
}

function addNewNoteApi(payload) {
    return axios.post('/api/notes/add-new-note', { title: payload.title, body: payload.body });
}

function updateNoteApi(payload) {
    return axios.post(`/api/notes/update-note/${payload.id}`, { title: payload.title, body: payload.body });
}

export function* fetchNotesAsync() {

    let { data }  = yield call(fetchNotesApi);
    
    yield put({ type: FETCH_NOTES_SUCCESS, payload: data });
}

export function* watchFetchNotesAsync() {
    yield takeEvery(FETCH_NOTES, fetchNotesAsync);
}

export function* addNewNoteAsync(action) {
    let { data } = yield call(addNewNoteApi, action.payload);

    yield put({ type: SELECT_NOTE, payload: data });
    yield put({ type: ADD_NEW_NOTE_SUCCESS, payload: data });
}

export function* watchAddNewNoteAsync() {
    yield takeLatest(ADD_NEW_NOTE, addNewNoteAsync);
}

export function* updateNoteAsync(action) {
    let { data } = yield call(updateNoteApi, action.payload);

    yield put({ type: UPDATE_NOTE_SUCCESS, payload: data });
    yield put({ type: SELECT_NOTE, payload: data });
}

export function* watchUpdateNoteAsync() {
    yield takeLatest(UPDATE_NOTE, updateNoteAsync);
}

export default function* rootSaga() {
    yield all([
        watchFetchNotesAsync(),
        watchAddNewNoteAsync(),
        watchUpdateNoteAsync(),
    ])
}