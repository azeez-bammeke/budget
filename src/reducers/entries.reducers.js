
const entriesReducer = (state = initialEntries, action) => {
    let newEntriesState
    switch (action.type) {
        case 'ADD_ENTRY':
            newEntriesState =  state.concat({...action.payload})
            return newEntriesState
        case 'REMOVE_ENTRY':
            newEntriesState = state.filter(entry => entry.id !== action.payload.id)
            return newEntriesState
        default:
            return state
    }
}

export default entriesReducer;

let initialEntries = [
    {
        id: 1,
        description: "Work Income",
        value : 111000,
        isExpense : false
    },
    {
        id: 2,
        description : "Rent",
        value : 1000,
        isExpense : true
    },
    {
        id: 3,
        description : "Water bill",
        value : 1056,
        isExpense : true
    },
    {
        id: 4,
        description : "Power bill",
        value : 15,
        isExpense : true
    }
]