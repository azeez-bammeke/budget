const entriesActionTypes = {
    GET_ENTRIES: "GET_ENTRIES",
    POPULATE_ENTRIES: "POPULATE_ENTRIES",
    POPULATE_ENTRY_VALUES: "POPULATE_ENTRY_VALUES",
    ADD_ENTRY: "ADD_ENTRY",
    REMOVE_ENTRY: "REMOVE_ENTRY",
    UPDATE_ENTRY: "UPDATE_ENTRY",
    REMOVE_ENTRY_RESULT: "REMOVE_ENTRY_RESULT",
    ADD_ENTRY_RESULT: "ADD_ENTRY_RESULT"
}

export default entriesActionTypes


export const addEntryAction = (payload) => ({type: entriesActionTypes.ADD_ENTRY, payload})
export const removeEntryAction = (id) => ({type: entriesActionTypes.REMOVE_ENTRY, payload: {id}})
export const updateEntryAction = (id, entry) => ({type: entriesActionTypes.UPDATE_ENTRY, payload: {id, entry}})
export const getEntriesAction = () => ({type: entriesActionTypes.GET_ENTRIES})
export const populateEntriesAction = (entries) => ({type: entriesActionTypes.POPULATE_ENTRIES, payload: entries})
export const populateEntryValuesAction = (id, entry) => ({type: entriesActionTypes.POPULATE_ENTRY_VALUES, payload: {id, entry}})
export const addEntryResultAction = (payload) => ({type: entriesActionTypes.ADD_ENTRY_RESULT, payload})