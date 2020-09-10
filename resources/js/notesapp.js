import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import rootSaga from "./sagas";
import { composeWithDevTools } from 'redux-devtools-extension';
import App from "./components/App";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

sagaMiddleware.run(rootSaga);

const NotesApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};



render(<NotesApp />, document.getElementById('notesapp'));

