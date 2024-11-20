import React from "react";
import {Statistic} from "semantic-ui-react";

function DisplayBalance(props){
    const {title, value, color='green', size= 'tiny'} = props;
    return (
        <Statistic color={color} size={size}>
            <Statistic.Label style={{textAlign : "left"}}>
                {title}
            </Statistic.Label>
            <Statistic.Value style={{textAlign : "left"}}>{value}</Statistic.Value>
        </Statistic>
    )
}

export default DisplayBalance;