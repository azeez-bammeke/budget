import React from "react";
import {Grid, Segment} from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";


function DisplayBalances({incomeTotal = 0.00, expenseTotal = 0.00}) {
    return (
        <Segment textAlign={"center"}>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance title={"Income"} value={incomeTotal}/>
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance title={"Expenses"} value={expenseTotal} color={"brown"}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default DisplayBalances;