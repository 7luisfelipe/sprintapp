import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderComponent extends Component {
  render() {
    return (
        <Header style={styles.header}>
          {/* <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right> */}
        </Header>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        borderColor: '#04B45F',
        backgroundColor: '#04B45F',
        color: '#04B45F'
    }
});