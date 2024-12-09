export const addEntryAction = (payload) => ({type: "ADD_ENTRY", payload})
export const removeEntryAction = (id) => ({type: "REMOVE_ENTRY", payload: {id}})