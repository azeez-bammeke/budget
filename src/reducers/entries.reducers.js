import entriesActionTypes from "../actions/entries.actions";

const entriesReducer = (state = initialEntries, action) => {
    let newEntriesState
    switch (action.type) {
        case entriesActionTypes.POPULATE_ENTRIES:
            return action.payload
        case entriesActionTypes.ADD_ENTRY_RESULT:
            newEntriesState = state.concat({...action.payload})
            return newEntriesState
        case entriesActionTypes.REMOVE_ENTRY_RESULT:
            newEntriesState = state.filter(entry => entry.id !== action.payload.id)
            return newEntriesState
        case entriesActionTypes.POPULATE_ENTRY_VALUES:
        case entriesActionTypes.UPDATE_ENTRY:
            newEntriesState = [...state]
            const index = newEntriesState.findIndex(entry => entry.id === action.payload.id)
            newEntriesState[index] = {...newEntriesState[index], ...action.payload.entry}
            return newEntriesState
        default:
            return state
    }
}

export default entriesReducer;

let initialEntries = []