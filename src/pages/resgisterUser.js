import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    AsyncStorage,
    BackHandler
} from 'react-native';

import {
    Text,
    Button,
    Picker,
    Content,
    Icon,
    Form
} from 'native-base';

import TextField from '../components/TextField'
import LoadingComponent from '../components/loadingComponent';
import HeaderComponent from '../components/headerComponent';

export default class registerUser extends Component {
    state = {
        isLoadingPage: true,
        isLoading: false,
        token: null,
        user: null,
        password: null,
        type: null
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
                            <Content>
                                <Form>
                                    <View>
                                        <TextField
                                            onChangeText={value => this.setState({ user: value.trim() })}
                                            label="Usuário" />
                                    </View>
                                    <View>
                                        <TextField
                                            onChangeText={value => this.setState({ user: value.trim() })}
                                            label="Senha"
                                            secureTextEntry={true} />
                                    </View>
                                    <View>
                                        <Picker mode="dropdown" >
                                            <Picker.Item label="Administrador" value="1" />
                                            <Picker.Item label="Usuário" value="2" />
                                        </Picker>
                                    </View>
                                    <View>
                                        <Button full style={styles.button} onPress={() => this.signIn()} >
                                            <Text style={styles.txtButton}>Cadastrar</Text>
                                        </Button>
                                    </View>
                                </Form>
                            </Content>
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
    }
});

