import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

export default class LoadingComponent extends Component {

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.cardBox}>
                <View style={styles.left}>
                        <Text style={styles.titleText}>Veículos</Text>
                        <Text style={styles.resultText}>350</Text>
                </View>
                <View style={styles.right}>
                        <TouchableOpacity onPress={() => {}}> 
                            <View style={styles.cardDetail}>
                                <Text style={styles.cardDetailText}>+</Text>
                            </View>
                    </TouchableOpacity>  
                </View>
            </View>
            <View style={styles.cardBox}>
                <View style={styles.left}>
                    <Text style={styles.titleText}>Ambulâncias</Text>
                    <Text style={styles.resultText}>12</Text>
                </View>
                <View style={styles.right}>
                        <TouchableOpacity onPress={() => {}}> 
                            <View style={styles.cardDetail}>
                                <Text style={styles.cardDetailText}>+</Text>
                            </View>
                    </TouchableOpacity>  
                </View>
            </View>
           
        </View>    
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardBox: {
        width: '100%',
        backgroundColor:'#f8f8f8',
        // alignItems: 'center',
        // padding:16,
        elevation: 12,
        flex: 1,
        maxHeight: 100,
        marginTop: 25,
        marginBottom: 10
    },
    cardDetail: {
        width: 56, 
        height: 56, 
        borderRadius: 28, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#04B45F',
        elevation: 12
    },
    cardDetailText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    right: {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        flex: 1,
        paddingRight: 16
    },
    left: {
        flex: 1,
        padding:16
    },
    titleText: {
        fontSize: 14
    },
    resultText: {
        color: '#000',
        fontSize: 42,
        fontWeight: 'bold'  
    }
});

