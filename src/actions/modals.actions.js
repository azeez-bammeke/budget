const modalActionTypes = {
    OPEN_EDIT_MODAL: "OPEN_EDIT_MODAL",
    CLOSE_EDIT_MODAL: "CLOSE_EDIT_MODAL"
}

export default modalActionTypes

export const modalOpenAction = (id) => ({ type: modalActionTypes.OPEN_EDIT_MODAL, payload: {id}})
export const modalCloseAction = () => ({ type: modalActionTypes.CLOSE_EDIT_MODAL})