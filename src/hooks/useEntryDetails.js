import {useEffect, useState} from "react";
import {addEntryAction, updateEntryAction} from "../actions/entries.actions";
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {modalCloseAction} from "../actions/modals.actions";

const useEntryDetails = (desc = "", val = 0, isExp = true) => {
    const [description, setDescription] = useState(desc)
    const [value, setValue] = useState(val)
    const [isExpense, setIsExpense] = useState(isExp)

    const dispatch = useDispatch()

    useEffect(() => {
        setDescription(desc)
        setValue(val)
        setIsExpense(isExp)
    }, [desc, val, isExp]);

    const addEntry = () => {
        dispatch(addEntryAction({
            id: uuidv4(),
            description,
            value,
            isExpense
        }))
        resetForm()
    }

    const updateEntry = (id) => {
        dispatch(updateEntryAction(id, {id, description, value, isExpense}))
        dispatch(modalCloseAction())
        resetForm()
    }

    const resetForm = () => {
        setValue(0)
        setDescription('')
        setIsExpense(true)
    }

    return {
        description,
        setDescription,
        value, setValue,
        isExpense,
        setIsExpense,
        addEntry,
        updateEntry
    }
}

export default useEntryDetails