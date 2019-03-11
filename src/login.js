import React, { Component } from 'react';
import { 
    StyleSheet, 
    ImageBackground, 
    View, 
    TouchableOpacity ,
    AsyncStorage
} from 'react-native';

import { 
    Form, 
    Item, 
    Input, 
    Label, 
    Text,
    Spinner,
    Alert
} from 'native-base';

import rest from './service/rest';

import LoadingComponent from './components/loadingComponent';

export default class Login extends Component {
    state = {
        isLoadingPage: true,
        isLoading: false,
        token: null      
    }

signIn = async () => {
    try{
       this.setState({ 
            isLoading: true,
            token: null
         });

        const response = await rest.post('/login', {
            username: 'lara',
            password: 'lara'
        });

        const token = response.headers.authorization;

        await this.setState({
                        token: token,
                        isLoading: false
                     });
       
        await AsyncStorage.multiSet([
            ['@sprint:token', token]
        ]);    
        
        if(token)
            await this.props.navigation.replace('Main')
     }catch(err){
        Alert.alert(err);
    }
}

async componentDidMount(){
    try{
    this.setState({isLoadingPage : true});

    //Busca as informações do AsyncStorage assim que inici a aaplicação
    const token = await AsyncStorage.getItem('@sprint:token');

    //Se já está logado...
    if(token){
       if(token != ''){
            this.setState({ token: token });
            await this.props.navigation.replace('Main')
       }
    }
    
    await this.setState({isLoadingPage : false});
    }catch(err){
        Alert.alert(err);
    }
}

  render() {
    return (
        <View style={{ flex: 1, width: null }}>
              {
                this.state.isLoadingPage ?
                    <LoadingComponent />
                : 
                <ImageBackground  
                style={{ flex: 1, width: null }} 
                source={ require('./imgs/bkLogin.jpg') } >
                   <View style={styles.container}>
                        <View>
                            <Form>
                                <Item floatingLabel style={styles.fieldBox}>
                                    <Label style={styles.labelField} >Email</Label>
                                    <Input style={styles.field} Rounded Textbox/>
                                </Item>
                                <Item floatingLabel last style={styles.fieldBox}>
                                    <Label style={styles.labelField} >Senha</Label>
                                    <Input style={styles.field} />
                                </Item>
                                <View style={styles.buttonBox}>
                                    <TouchableOpacity onPress={() => this.signIn()} style={styles.button}> 
                                        {
                                        this.state.isLoading ?
                                            <Spinner color='#04B45F' />                                                                   
                                            : 
                                            <Text style={styles.txtButton} hidden={true}>Login</Text> 
                                        }
                                    </TouchableOpacity>    
                                </View>
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
    field: {
        color: '#fff',
        fontSize: 14,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 10,
        padding: 10,
        borderBottomColor: 'rgba(255,255,255,0.3)',
        borderBottomWidth: 7      
    },
    fieldBox: {
        borderBottomColor: '#fff',
        borderBottomWidth: 0
    },
    labelField: {
        color: '#fff' 
    },
    button: {
        borderColor: '#04B45F',
        padding: 10,
        marginTop: 20,
        color: '#04B45F',
        // backgroundColor: '#04B45F',
        borderRadius: 10,
        fontSize: 14,
        borderWidth: 2,
        alignItems: 'center'
    },
    txtButton: {
        color: '#04B45F',
        fontSize: 14,
        fontWeight: 'bold'
    },
    buttonBox: {
        padding: 8
    }
});

