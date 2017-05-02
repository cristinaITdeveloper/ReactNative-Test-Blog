'use strict';
const React = require('react');
const ReactNative = require('react-native');
const Categories = require('./categories.js');
var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80,
    textAlign : 'center'
  },
  container: {
   flex: 1
  }
});

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MainView extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'WordpressBlog',
          component: Categories,
        }}/>
    );
  }
}

ReactNative.AppRegistry.registerComponent('WordpressBlog', function() { return MainView });
