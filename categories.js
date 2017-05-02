'use strict';
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image,
  AppRegistry,
  ListView
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    padding: 15,
    backgroundColor: 'transparent',
    color: 'white',
    fontSize : 30,
    alignItems: 'center',
    textAlign : 'center',
    justifyContent: 'center'
  },
  image: {
    alignSelf: 'stretch',
    height: 200
  },
  overlay:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  }
})

const rows = [
  {id: 0, text: 'View'},
  {id: 1, text: 'Text'},
  {id: 2, text: 'Image'},
  {id: 3, text: 'ScrollView'},
  {id: 4, text: 'ListView'},
]

const rowHasChanged = (r1, r2) => r1.id !== r2.id

const datasource = new ListView.DataSource({rowHasChanged})

class Categories extends React.Component {

  state = {
    dataSource: datasource.cloneWithRows(rows)
  }
  renderRow = (rowData) => {
    return (
      <View style={styles.container}>

          <Image
            style={styles.image}
            source={{uri: 'https://www.mdslab.org/wp-content/uploads/2016/07/gitLogo.jpg'}}>
            <View style={styles.overlay}>
              <Text style={styles.row}>
                {rowData.text}
                </Text>
                </View>
          </Image>

      </View>
    )
  }
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

module.exports = Categories;
