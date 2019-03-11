import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,Text
} from 'react-native';

export default class inLineComponent extends Component {
    
  render() {
    return (
        <View styles={styles.line}>
            <Text>aposkpaokspaokspoa</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    line: {
        alignItems: 'center',
        flexDirection:'row'
    }
});



