import React from "react";
import {Button, Modal} from "semantic-ui-react";
import EntryForm from "./EntryForm";


function ModalEdit({isOpen, setIsOpen,
                       description, isExpense, setIsExpense,
                       setDescription, setValue, value
                   }){
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryForm
                    isExpense={isExpense}
                    description={description}
                    value={value}
                     setValue={setValue}
                     setDescription={setDescription}
                     setIsExpense={setIsExpense}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={()=> setIsOpen(false)}>Close</Button>
                <Button primary onClick={()=> setIsOpen(false)}>Update</Button>
            </Modal.Actions>
        </Modal>
    )
}


export default ModalEdit;