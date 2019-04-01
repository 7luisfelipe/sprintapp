import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Picker,
    ToastAndroid,
    Image
} from 'react-native';

import {
    Text,
    Button,
    Form
} from 'native-base';

import LoadingComponent from '../components/loadingComponent';
import HeaderComponent from '../components/headerComponent';
import TextField from '../components/TextField'
import validate from '../validation/validation_wrapper'

export default class registerUser extends Component {
    state = {
        isLoadingPage: true,
        isLoading: false,
        token: null,
        user: null,
        userError: null,
        password: null,
        passwordError: null,
        type: null
    }

    register = async () => {
        try {
            if (this.validate()) {
                // this.setState({
                //     isLoading: true,
                //     token: null
                // });

                /*
                const response = await rest.post('/register', {
                    user: 'lara',
                    password: 'lara'
                });
    
                const token = response.headers.authorization;
    
                await this.setState({
                    token: token,
                    isLoading: false
                });
                */

                // await AsyncStorage.multiSet([
                //     ['@sprint:token', token]
                // ]);

                /*
                if (token)
                    await this.props.navigation.replace('Main')
                */

                ToastAndroid.showWithGravityAndOffset(
                    'Usuário cadastrado com sucesso!',
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP,
                    0,
                    30
                );

                await this.props.navigation.replace('Main')
            }

        } catch (err) {
            Alert.alert(err);
        }
    }

    validate = () => {
        const userError = validate('user', this.state.user)
        const passwordError = validate('password', this.state.password)

        this.setState({
            userError: userError,
            passwordError: passwordError
        })

        if (userError || passwordError) {
            return false
        }

        return true
    }

    async  componentDidMount() {
        try {
            this.setState({ isLoadingPage: true });
            await this.setState({ isLoadingPage: false });
        } catch (err) {

        }
    }

    render() {
        return (
            <View style={{ flex: 1, width: null }}>
                <HeaderComponent />
                {
                    this.state.isLoadingPage ?
                        <LoadingComponent />
                        :
                        <View style={styles.container}>

                            <Form>
                                <View style={styles.contentImage}>
                                    <Image style={{ justifyContent: 'center' }}
                                        source={require('../imgs/green_sprint.png')}
                                    />
                                </View>
                                <View>
                                    <TextField
                                        onChangeText={value => this.setState({ user: value.trim() })}
                                        styleLabel={{ color: '#04B45F' }}
                                        styleInput={{ color: '#000' }}
                                        onBlur={() => {
                                            this.setState({
                                                userError: validate('user', this.state.user)
                                            })
                                        }}
                                        label="Usuário" />
                                    <Text style={[styles.errorMessage, this.state.userError ? { display: 'flex' } : { display: 'none' }]}>{this.state.userError ? this.state.userError : ''}</Text>
                                </View>
                                <View>
                                    <TextField
                                        onChangeText={value => this.setState({ password: value.trim() })}
                                        onBlur={() => {
                                            this.setState({
                                                passwordError: validate('password', this.state.password)
                                            })
                                        }}
                                        styleLabel={{ color: '#04B45F' }}
                                        styleInput={{ color: '#000' }}
                                        label="Senha"
                                        secureTextEntry={true} />
                                    <Text style={[styles.errorMessage, this.state.passwordError ? { display: 'flex' } : { display: 'none' }]}>{this.state.passwordError}</Text>
                                </View>
                                <View style={styles.pickers} >
                                    <Picker mode="dropdown"
                                        selectedValue={this.state.type} 
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({type: itemValue})
                                          }   
                                    >
                                        <Picker.Item label="Administrador" value="1" />
                                        <Picker.Item label="Usuário" value="2" />
                                    </Picker>
                                </View>
                                <View>
                                    <Button full style={styles.button} onPress={() => this.register()} >
                                        <Text style={styles.txtButton}>Cadastrar</Text>
                                    </Button>
                                </View>
                            </Form>

                        </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        justifyContent: 'center'
    },
    pickers: {
        marginTop: 20,
        fontSize: 14,
        borderBottomColor: '#04B45F',
        borderBottomWidth: 2
    },
    button: {
        borderColor: '#04B45F',
        marginTop: 20,
        color: '#fff',
        backgroundColor: '#04B45F'
    },
    contentImage: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMessage: {
        color: 'red',
        fontSize: 12,
        marginTop: 10
    }
});

