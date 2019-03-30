import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

const cardComponent = (props) => (
    
    <View style={styles.cardBox}>
        <ImageBackground style={{ flex: 1, width: null }}
            source={require('../imgs/bkg.png')}>
            <View style={styles.left}>
                <Text style={styles.titleText}>{props.name}</Text>
                <Text style={styles.resultText}>{props.qtd}</Text>
            </View>
            <View style={styles.right}>
                <TouchableOpacity onPress={() => { }}>
                    <View style={styles.cardDetail}>
                        <Text style={styles.cardDetailText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>

)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardBox: {
        width: '100%',
        maxHeight: 100,
        backgroundColor: '#f8f8f8',
        // alignItems: 'center',
        // padding:16,
        elevation: 12,
        flex: 1,
        marginTop: 25,
        marginBottom: 10
    },
    cardDetail: {
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#04B45F',
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
        padding: 16
    },
    titleText: {
        fontSize: 14,
        color: '#fff'
    },
    resultText: {
        color: '#fff',
        fontSize: 42,
        fontWeight: 'bold'
    }
});

export default cardComponent