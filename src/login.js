import React, { Component } from 'react';

import {
    StyleSheet,
    ImageBackground,
    View,
    ToastAndroid
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {
    Form,
    Button,
    Text,
    Item,
    Icon,
    Alert,
    Spinner
} from 'native-base';

import TextField from '../src/components/TextField'
import validate from '../src/validation/validation_wrapper'
import rest from './service/rest';

import LoadingComponent from './components/loadingComponent';

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoadingPage: true,
            isLoading: false,
            token: null,
            email: '',
            emailError: '',
            password: '',
            passwordError: ''
        }
    }

    validate = () => {
        const emailError = validate('email', this.state.email)
        const passwordError = validate('password', this.state.password)

        this.setState({
            emailError: emailError,
            passwordError: passwordError
        })

        if (emailError || passwordError) {
            return false
        }

        return true
    }

    toast = (msg) => {
        ToastAndroid.showWithGravityAndOffset(
            msg,
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
            0,
            30
        );
    }

    signIn = async () => {
        // try {
        //     this.setState({
        //         isLoading: true,
        //         token: null
        //     });

        //     const response = await rest.post('/login',
        //         {"username": "lara", "password": "lara"}
        //     );

        //     const token = response.headers.authorization;

        //     await this.setState({
        //         token: token,
        //         isLoading: false
        //     });

        //     await AsyncStorage.multiSet([
        //         ['@sprint:token', token]
        //     ]);

        //     if (token)
        //         await this.props.navigation.replace('Main')

            await this.props.navigation.replace('Main')

    //     } catch (err) {
    //         console.log(err);
    //     }
    }

    async componentDidMount() {
        try {
            this.setState({ isLoadingPage: true });

            //Busca as informações do AsyncStorage assim que inici a aaplicação
            const token = await AsyncStorage.getItem('@sprint:token');

            //Se já está logado...
            if (token) {
                if (token != '') {
                    this.setState({ token: token });
                    await this.props.navigation.replace('Main')
                }
            }

            await this.setState({ isLoadingPage: false });
        } catch (err) {
            Alert.alert(err);
        }
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{ flex: 1, width: null }}>
                {
                    this.state.isLoadingPage ?
                        <LoadingComponent />
                        :
                        <ImageBackground
                            style={{ flex: 1, width: null }}
                            source={require('./imgs/bkLogin.jpg')} >
                            <View style={styles.container}>
                                <View>
                                    <Form>
                                        <View>
                                            <TextField
                                                onChangeText={value => this.setState({ email: value.trim() })}
                                                onBlur={() => {
                                                    this.setState({
                                                        emailError: validate('email', this.state.email)
                                                    })
                                                }}
                                                label="Email" />
                                            <Text style={[styles.errorMessage, this.state.emailError ? { display: 'flex' } : { display: 'none' }]}>{this.state.emailError ? this.state.emailError : ''}</Text>
                                        </View>

                                        <View>
                                            <TextField
                                                onChangeText={value => this.setState({ password: value.trim() })}
                                                onBlur={() => {
                                                    this.setState({
                                                        passwordError: validate('password', this.state.password)
                                                    })
                                                }}
                                                label="Senha"
                                                error={this.state.passwordError}
                                                secureTextEntry={true} />
                                            <Text style={[styles.errorMessage, this.state.passwordError ? { display: 'flex' } : { display: 'none' }]}>{this.state.passwordError}</Text>
                                        </View>

                                        <Button full style={styles.button} onPress={() => this.signIn()} >
                                            <Text style={styles.txtButton}>Login</Text>
                                            <Icon name="paper-plane" />
                                            {/* {
                                                this.state.isLoading ?
                                                    <Spinner color='#fff' />
                                                    :
                                                    <View style={styles.buttonBox}>
                                                        <Text style={styles.txtButton}>Login</Text>
                                                        <Icon name="paper-plane" />
                                                    </View>
                                            } */}
                                        </Button>
                                    </Form>
                                </View>
                            </View>
                        </ImageBackground >
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center'
    },
    button: {
        borderColor: '#04B45F',
        marginTop: 20,
        color: '#fff',
        backgroundColor: '#04B45F'
    },
    txtButton: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 3
    },
    buttonBox: {
        flexDirection: 'row'
    },
    errorMessage: {
        color: '#fff',
        fontSize: 12,
        marginTop: 10
    },
    block: {
        flex: 1
    }
});