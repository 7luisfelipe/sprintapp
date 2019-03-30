import React from 'react';

import {
    StyleSheet,
    View
} from 'react-native';

import {
    Item,
    Input,
    Label,
    Text
} from 'native-base';

const TextField = (props) => (

    <Item floatingLabel style={styles.fieldBox} >
        <Label style={styles.labelField} >{props.label}</Label>
        <Input {...props} style={styles.field} />
    </Item>

)

const styles = StyleSheet.create({
    field: {
        color: '#fff',
        fontSize: 14,
        borderBottomColor: '#04B45F',
        borderBottomWidth: 2
    },
    labelField: {
        color: '#fff'
    },
    fieldBox: {
        borderBottomColor: '#04B45F',
        borderBottomWidth: 0,
        marginLeft: 0
    },
});

export default TextField