import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    TouchableOpacity ,
    AsyncStorage,
    BackHandler
} from 'react-native';

import { 
    Text,
    Spinner
} from 'native-base';

import LoadingComponent from '../components/loadingComponent';
import CardComponent from '../components/cardComponent';
import ImageCardComponent from '../components/p/imageCardComponent';
import ImageCardComponent1 from '../components/p/imageCardComponent.1';
import ImageCardOrange from '../components/ImageCardOrangeComponent';
import ImageCardRed from '../components/imageCardRedComponent';
import ImageCardGreen from '../components/imageCardGreenComponent';
import ImageCardBlue from '../components/imageCardBlueComponent';

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
                    <View style={styles.imgCard}>
                        <ImageCardComponent title='Novidades' description='O que a de novo?'></ImageCardComponent>
                        <ImageCardComponent1  title='Pets destaque' description='Quem mais chamou atenção?'></ImageCardComponent1>
                    </View>
                    <View style={styles.imgCard}>
                        <ImageCardComponent1  title='Vídeos' description='Vídeos da semana'></ImageCardComponent1>
                        <ImageCardComponent  title='Petiscos' description='confira o keldogs'></ImageCardComponent>
                    </View>

                    <View style={styles.imgCard}>
                        <ImageCardBlue  title='Meu Pet' description='Meu melhor amigo'></ImageCardBlue>
                        <ImageCardGreen  title='Prt Shops' description='Onde levar seu melhor amigo'></ImageCardGreen>
                        <ImageCardRed title='Roupas' description='Para o melhor estilo'></ImageCardRed>
                    </View>

                    <View style={styles.imgCard}>
                        <ImageCardRed  title='Eventos' description='Bora caoMinhada?'></ImageCardRed>
                        <ImageCardOrange  title='Galeria' description='As melhores fotos'></ImageCardOrange>
                        <ImageCardBlue title='Diversos' description='Curiosidades'></ImageCardBlue>
                    </View>
                </View>
                }
        </View>           
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
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

        // elevation: 5, 
        // marginBottom: 3
        // backgroundColor: 'rgba(231,76,60,1)'
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
        flexDirection:'row',
        marginTop: 10,
        justifyContent: 'center'
    }
});

