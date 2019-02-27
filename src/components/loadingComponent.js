import React, { Component } from 'react';
import { 
    View, 
    StyleSheet
} from 'react-native';

import { 
    Spinner
} from 'native-base';

export default class LoadingComponent extends Component {

  render() {
    return (
        <View style={styles.container}>
            <Spinner color='#04B45F' />  
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

