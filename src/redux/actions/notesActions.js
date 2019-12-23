import axios from "axios";
import { setUsername } from "./usersActions";

/**
 * @desc Gets all notes from database
 */
export const getNotes = () => (dispatch, getState) => {
    axios
        .get(`/notes/allNotes`)
        .then(res => {
            dispatch(setListNotes(res.data));
        })
        .then(console.log);
};


/**
 * @desc Add a note
 */
export const addNote = () => (dispatch, getState) => {
    const { username,newNote } = getState().notesReducer;
  
    axios
        .get(`/notes/addNote?newNote=${newNote}`)
        .then(() => {
            dispatch(setUsername(username))
            dispatch(setNewNote(""));
            dispatch(setId(""));
            dispatch(getNotes());
        })
        .catch(console.log);
};


/**
 * @desc Delete a note
 */
export const deleteNote = () => (dispatch, getState) => {
    const { _id } = getState().notesReducer;
    axios
        .delete(`/notes/deleteNote/${_id}`, { params: { _id: _id } })
        .then(res => {
            dispatch({
                type: "DELETE_NOTE",
                _id
            });
            dispatch(setNewNote(""));
            dispatch(setId(""));
            dispatch(getNotes());
        })
        .catch(err => {
            console.log(err);
        });
};


/**
 * @desc update a note
 */
export const updateNote = () => (dispatch,getState) =>{
    const {_id,newNote} = getState().notesReducer
    axios.get(`/notes/update?id=${_id}&newNote=${newNote}`)
    .then(()=>{
        dispatch(setActionType('Add'))
        dispatch(setNewNote(''))
        dispatch(setId(''))
        dispatch(getNotes())
    })
}

export const setListNotes = notes => ({
    type: "SET_LIST_NOTES",
    notes
});

export const setId = _id => ({
    type: "SET_ID",
    _id
});

export const setNewNote = newNote => ({
    type: "SET_NEW_NOTE",
    newNote
});

export const setActionType = (actionType) =>({
    type: 'SET_ACTION_TYPE',
    actionType,
})
