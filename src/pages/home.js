import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    ImageBackground,
    BackHandler,
    Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Display from 'react-native-display';

import {
    BarChart
} from 'react-native-chart-kit'

import LoadingComponent from '../components/loadingComponent';
import CardComponent from '../components/cardComponent';

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.props.active = true
        this.state = {
            isLoadingPage: true,
            isLoading: false,
            token: null,
            chartWidth: null,
            activeAmbulancia: false
        }
    }

    signOut = async () => {
        try {
            this.setState({
                isLoading: true,
                token: null
            });

            await AsyncStorage.multiSet([
                ['@sprint:token', '']
            ]);

            await this.setState({
                isLoading: false
            });

            //await this.props.navigation.replace('../login')
            BackHandler.exitApp();
        } catch (err) {

        }
    }

    toggleDisplay() {
        const toggle = !this.state.activeAmbulancia

        this.setState({
            activeAmbulancia: toggle
        })
    }

    async  componentDidMount() {
        try {
            this.setState({ isLoadingPage: true });
            await this.setState({ isLoadingPage: false });
        } catch (err) {

        }
    }

    render() {
        const chartConfig = {
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2 // optional, default 3
        }
        const data = {
            labels: ['Janeiro', 'Fevereiro', 'Março'],
            datasets: [{
                data: [20, 45, 28]
            }]
        }
        const screenWidth = Dimensions.get('window').width - 30
        return (
            <View style={{ flex: 1, width: null }}>
                {
                    this.state.isLoadingPage ?
                        <LoadingComponent />
                        :
                        <View style={styles.container}>
                            <CardComponent
                                name='Veículos'
                                qtd={350}
                            ></CardComponent>

                            <View style={styles.cardBox}>
                                <ImageBackground style={{ flex: 1, width: null }}
                                    source={require('../imgs/bkg.png')}>
                                    <View style={styles.left}>
                                        <Text style={styles.titleText}>Ambulância</Text>
                                        <Text style={styles.resultText}>14</Text>
                                    </View>
                                    <View style={styles.right}>
                                        <TouchableOpacity onPress={() => { this.toggleDisplay() }}>
                                            <View style={styles.cardDetail}>
                                                <Text style={styles.cardDetailText}>+</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>
                            </View>

                            <Display enable={this.state.activeAmbulancia}
                                exit="fadeOut"
                                enter="fadeIn"
                                >
                                <BarChart
                                    style={{
                                        marginVertical: 8,
                                        borderRadius: 10
                                    }}
                                    data={data}
                                    width={screenWidth}
                                    height={220}
                                    fromZero={true}
                                    chartConfig={chartConfig}
                                />
                            </Display>

                        </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
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
    cardBox: {
        width: '100%',
        maxHeight: 100,
        backgroundColor: '#f8f8f8',
        // alignItems: 'center',
        // padding:16,
        elevation: 12,
        flex: 1,
        marginTop: 25,
        marginBottom: 20
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
    button: {
        borderColor: '#04B45F',
        padding: 10,
        marginTop: 20,
        color: '#04B45F',
        borderRadius: 10,
        fontSize: 14,
        borderWidth: 2,
        alignItems: 'center',
    },
    txtButton: {
        color: '#04B45F',
        fontSize: 14,
        fontWeight: 'bold'
    },
    buttonBox: {
        padding: 8
    },
    imgCard: {
        alignItems: 'center',
        flexDirection: 'row'
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

