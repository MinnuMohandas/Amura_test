import * as React from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity,FlatList,Button,Image,ScrollView} from 'react-native';
import { ListItem ,Header,Card,Icon} from 'react-native-elements'
import {styles} from "../components/stylesheet.js"
export default class FilmDetails extends React.Component  {
  
constructor(props){
    super(props)
    this.state={
        title:this.props.navigation.getParam('details')["Title"],
        url:this.props.navigation.getParam('details')["Poster"],
        type:this.props.navigation.getParam('details')["Type"],
        year:this.props.navigation.getParam('details')["Year"],
        creator:"Vince Gilligan",
        stars:"Bryan Cranston, Aaron Paul, Anna Gunn",
        time:15,
        duration:49,
        genure:"Crime,Thriller"
    }
}
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
        <Card>
        

<View style={{flex: 1, flexDirection: 'row', alignItems:'flex-start'}}>
<View style={{height: 50,width:'33%',paddingVertical: 15,
                  paddingHorizontal: 10,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center"}} >
             <Icon
  reverse
  name='bookmarks-outline'
  type='ionicon'
  color='#e2b616'
/>
              </View>
              <View style={{ height: 50,width:'33%',paddingVertical: 15,
                  paddingHorizontal: 10,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"}} >
              <Card.Title >{this.state.title}</Card.Title>
              </View>
              <View style={{ height: 50,width:'33%',justifyContent:'flex-end'}} >
              <View style={{
                  
                  paddingVertical: 15,
                  paddingHorizontal: 10,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center"
              }}>
                <Icon
  
  name='star'
  type='ionicon'
  color='#e2b616'
/>
                  <Text style={{
                          fontSize: 16,
                          color: "black"
                      }}>9.5</Text>
                      <Text style={{
                          fontSize: 16,
                          color: "black"
                      }}>|
                      <Icon
  
  name='star-outline'
  type='ionicon'
  color='black'
/></Text>
                  <Text style={{
                          fontSize: 16,
                          color: "black"
                      }}>9.5</Text>
                  
              </View>
              
              
              </View>
        </View>
        

        
        <Card>
        <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{height: 10}} >
              <Text>{this.state.time} |</Text>
              </View>
              <View style={{ height: 10}} >
              <Text>{this.state.time}min | </Text>
              </View>
              <View style={{ height: 10}} >
              <Text>{this.state.genure}</Text>
              </View>
        </View>
            
        </Card>
        
        </Card>
        
        <Card>
        <Card.Title >{this.state.type}</Card.Title>
        <Card.Divider/>
        <View style={{height: 300}} >
      
      <Card>
          <Image source={{uri:this.state.url,height:200}}>
      
          </Image>
          
      </Card>
      <Card>
      <Icon
            
            name='play'
            type='ionicon'
            color='#517fa4'
          />
      </Card>
        
        </View>
       
        <Card.Divider/>
        </Card>
        <Card>
        <Card.Title >Creator :{this.state.creator}</Card.Title>
        <Card.Title >Stars :{this.state.stars}</Card.Title>
      </Card>
      <Card>
      <Button
            icon={<Icon
            
            name='add-outline'
            type='ionicon'
            color='#517fa4'
          />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='WishList' />
      </Card>
      
      
        </ScrollView>
              </View>
    );
  }
  
}

