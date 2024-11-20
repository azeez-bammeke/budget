import React from "react";
import {Grid, Segment} from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";


function DisplayBalances() {
    return (
        <Segment textAlign={"center"}>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance title={"Income"} value={"10,005,206.55"}/>
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance title={"Expenses"} value={"205.52"} color={"brown"}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default DisplayBalances;