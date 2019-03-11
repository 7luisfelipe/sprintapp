import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import { Header } from 'native-base';
export default class HeaderComponent extends Component {
  render() {
    return (

      <View  style={styles.headerBox}>
        <ImageBackground  
            style={{width: '100%', height: '100%'}} 
          source={ require('../imgs/bar3.jpg') } >
          <View>

          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBox: {
    height: 55,
    marginTop: 0,
    // elevation: 12,
    // marginBottom: 3,

    width: '100%',
    backgroundColor:'#f8f8f8',
    // alignItems: 'center',
    // padding:16,
    elevation: 12,
    maxHeight: 100,
    marginBottom: 10
  },
    header: {
        // borderColor: '#04B45F',
        // backgroundColor: '#04B45F',
        color: '#04B45F',
       
        width: '100%',
        // backgroundColor:'#f8f8f8',
        alignItems: 'center',
        padding:16,
        // elevation: 12,
        // flex: 1,
        height: 30,
        maxHeight: 100,
        marginTop: 0
    }
});

 // <Header style={styles.header}>
        
        //   {/* <Left>
        //     <Button transparent>
        //       <Icon name='arrow-back' />
        //     </Button>
        //   </Left>
        //   <Body>
        //     <Title>Header</Title>
        //   </Body>
        //   <Right>
        //     <Button transparent>
        //       <Icon name='menu' />
        //     </Button>
        //   </Right> */}
        // {/* // </Header> */}