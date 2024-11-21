import React from "react";
import {Button, Modal} from "semantic-ui-react";
import EntryForm from "./EntryForm";


function ModalEdit({isOpen, setIsOpen}){
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryForm/>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={()=> setIsOpen(false)}>Close</Button>
                <Button>Save</Button>
            </Modal.Actions>
        </Modal>
    )
}


export default ModalEdit;