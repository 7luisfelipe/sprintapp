import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Tab, Tabs, TabHeading, Text } from 'native-base';
import Map from './map';
import Home from './home';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading={ <TabHeading style={styles.tab} ><Text>Home</Text></TabHeading>}>
                <Home />
          </Tab>
          <Tab heading={ <TabHeading style={styles.tab}><Text>Mapa</Text></TabHeading>}>
              <Map />
          </Tab>       
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
        backgroundColor: '#04B45F',
        padding: 10
    }
});