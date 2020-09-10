import React, { useEffect, useState } from "react";
import { fetchnotes } from "../actions/notes";
import { getauthtoken } from "../actions/auth";
import { useDispatch } from "react-redux";
import CreateNoteForm from "./CreateNoteForm";
import { Router, Link } from "@reach/router";

/*
Procedure: componentDidMount() => load token. fetch all notes.
*/

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchnotes());
    },[]);

    return (
        <div className="container pt-3">
            <h2>Welcome to Notes Maker</h2>
            <nav>
                <Link to="/">Home</Link>{" "}
                <Link to="/add-note">Add New Note</Link>
            </nav>

            <Router>
                <Home path="/" />
                <CreateNoteForm path="/add-note" />
            </Router>

            {/* <button className="btn btn-primary" onClick={() => dispatch(fetchnotes())}>Fetch Notes</button> */}
            {/* <button className="btn btn-primary" onClick={() => dispatch(getauthtoken())}>Fetch Auth Token</button> */}
        </div>
    );
}

const Home = () => {
    return (
        <h3>Home</h3>
    )
}

export default App;