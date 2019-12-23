
const initialState = {
    notes:[],
    newNote: '',
    actionType: 'Add',
    _id:'',
}

const notesReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'SET_LIST_NOTES':
            return {
                ...state,
                notes:action.notes
            }
        case 'SET_ACTION_TYPE':
            return{
                ...state,
                actionType: action.actionType,
            }
        case 'DELETE_NOTE':
            return{
                ...state,
                notes:state.notes.filter(note => note._id !== action.id)
            }
        case 'SET_NEW_NOTE':
            return{
                ...state,
                newNote: action.newNote,
            }
        case 'SET_ID':
            return{
                ...state,
                _id: action._id
            }
        default:
            return state
        }   
}

export default notesReducer;