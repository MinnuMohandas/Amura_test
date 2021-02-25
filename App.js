import * as React from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity,FlatList} from 'react-native';
import { ListItem } from 'react-native-elements'
import FilmSearch from './screens/filmSearch.js'
import FilmDetails from './screens/filmDetails.js'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

export default class App extends React.Component  {
    render(){
    return (
       <AppContainer/>
        
    )
    }
         
}
const switchNavigator=createSwitchNavigator({
  Search:FilmSearch,
  details:FilmDetails
})
const AppContainer=createAppContainer(switchNavigator);

