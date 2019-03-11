import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    AsyncStorage,
    BackHandler
} from 'react-native';

import LoadingComponent from '../components/loadingComponent';
import CardComponent from '../components/cardComponent';

export default class Logout extends Component {
    state = {
        isLoadingPage: true,
        isLoading: false,
        token: null      
    }

signOut = async () => {
    try{      
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
     }catch(err){
        
    }
}

async  componentDidMount(){
    try{
        this.setState({isLoadingPage : true});
        await this.setState({isLoadingPage : false});
    }catch(err){

    }    
}

  render() {
    return (
        <View style={{ flex: 1, width: null }}>
              {
                this.state.isLoadingPage ?
                    <LoadingComponent />
                :
                <View style={styles.container}>
                   <CardComponent></CardComponent>
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
        flexDirection:'row'
    }
});

