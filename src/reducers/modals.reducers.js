import modalActionTypes from "../actions/modals.actions";

const modalsReducers = (state = {isOpen: false}, action) => {
    switch (action.type) {
        case modalActionTypes.OPEN_EDIT_MODAL:
            return {...state, isOpen: true, id: action.payload?.id}
        case modalActionTypes.CLOSE_EDIT_MODAL:
            return {...state, isOpen: false, id: null}
        default:
            return state
    }
}

export default modalsReducers;