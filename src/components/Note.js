import React from "react";
import { connect } from "react-redux";
import {
    getNotes,
    addNote,
    deleteNote,
    updateNote,
    setId,
    setNewNote,
    setActionType
} from "../redux/actions/notesActions";

const Note = ({
    isLoggedIn,
    dispatch,
    username,
    notes,
    newNote,
    actionType,
    _id
}) => {
    React.useEffect(() => {
        dispatch(getNotes());
    }, [dispatch]);

    const handleOnClick = () => {
        if (actionType === "Edit") {
            return dispatch(updateNote());
        }
        return dispatch(addNote(username, newNote),window.location.reload());
    };

    return (
        <div>
            {!isLoggedIn && (
                <>
                    <p>
                        You need access to view all notes or add a note. Please
                        log in or Sign up
                    </p>
                </>
            )}
            <div>
                <h1>Make a new note!</h1>
                <input
                    onChange={e => dispatch(setId(e.target.value))}
                    type="text"
                    value={_id}
                    placeholder="enter id here"
                ></input>
                <input
                    onChange={e => dispatch(setNewNote(e.target.value))}
                    name="description"
                    placeholder="enter new note here"
                    value={newNote}
                    type="text"
                ></input>

                <button onClick={handleOnClick} type="button">
                    {actionType} Note
                </button>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>id</th>
                        <th>Description</th>
                        <th>User</th>
                        <th>Actions</th>
                    </tr>
                    {notes.map(note => (
                        <tr key={note._id}>
                            <td width="35%">{note._id}</td>
                            <td width="50%">{note.description}</td>
                            <td width="10%"></td>
                            <td width="5%">
                                <button
                                    onClick={() => {
                                        dispatch(setActionType("Edit"));
                                        dispatch(setId(note._id));
                                        dispatch(setNewNote(note.description));
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        dispatch(setId(note._id));
                                        dispatch(deleteNote(note._id));
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const mapStatetoProps = state => ({
    username: state.userReducer.username,
    notes: state.notesReducer.notes,
    actionType: state.notesReducer.actionType,
    _id: state.notesReducer._id,
    newNote: state.notesReducer.newNote,
    isLoggedIn: state.userReducer.isLoggedIn
});

export default connect(mapStatetoProps)(Note);
