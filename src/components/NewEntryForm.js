import React from "react";
import {Form} from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";


function NewEntryForm(
    {addEntry, description="", isExpense=true, setIsExpense,
        setDescription, setValue, value=0}
) {
    return (
        <Form unstackable>

            <EntryForm
                description={description}
                value={value}
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