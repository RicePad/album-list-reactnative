import React from 'react';
import { AppRegistry } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

 class App extends React.Component {
  render() {
    return (
      <View>
          <Header headerText="SayMosaic" />
          <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});


export default App;