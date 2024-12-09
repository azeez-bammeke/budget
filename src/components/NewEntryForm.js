import React, {useState} from "react";
import {Form} from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import {useDispatch} from "react-redux";
import {addEntryAction} from "../actions/entries.actions";
import {v4 as uuidv4} from 'uuid';


function NewEntryForm() {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [isExpense, setIsExpense] = useState(true)

    const dispatch = useDispatch()

    const addEntry = () => {
        dispatch(addEntryAction({
            id: uuidv4(),
            description,
            value,
            isExpense
        }))
        setValue('')
        setDescription('')
        setIsExpense(true)
    }
    return (
        <Form unstackable>

            <EntryForm
                description={description}
                value={value | Number}
                isExpense={isExpense}
                setValue={setValue}
                setDescription={setDescription}
                setIsExpense={setIsExpense}
            />
            <ButtonSaveOrCancel addEntry={addEntry}/>
        </Form>
    )
}

export default NewEntryForm;