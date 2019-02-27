import React from 'react';

import {
    Item,
    Input,
    Label,
    Text
} from 'native-base';

const TextField = (props) => (

    <Item floatingLabel style={props.style.fieldBox} >
        <Label style={props.style.labelField} >{props.label}</Label>
        <Input style={props.style.field} />
        props.error ? <Text>{props.error}</Text> : null
    </Item>

)

export default TextField