import React, {Fragment} from "react";
import {Checkbox, Form, Segment} from "semantic-ui-react";


function EntryForm({description, value, isExpense, setValue, setDescription, setIsExpense}){
    return (
        <Fragment>
            <Form.Group>
                <Form.Input
                    icon={'tags'} width={12} label={'Description'}
                    placeholder={"New shinny thing"}
                    value={description}
                    onChange={(event) => {
                        console.log(event.target.value)
                        setDescription((event.target.value))
                    }
                    }
                />
                <Form.Input
                    icon={'dollar'} width={4}
                    iconPosition={"left"}
                    label={'Value'}
                    placeholder={"100.00"}
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </Form.Group>

            <Segment compact>
                <Checkbox toggle
                          label={'is expense'}
                          checked={isExpense}
                          onChange={() => setIsExpense(isExpenseState => !isExpenseState)}
                />
            </Segment>
          </Fragment>
    )
}



export default EntryForm