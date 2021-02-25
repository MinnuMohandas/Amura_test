import * as React from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity,FlatList} from 'react-native';
import { ListItem , Icon,Avatar,Header} from 'react-native-elements'
import {styles} from "../components/stylesheet.js"
export default class FilmSearch extends React.Component  {
  constructor(){
    super();
    this.state={
      name:"",
      listData:[]
    }
  }

  getData=async (apiData)=>{
  var response= await fetch ("http://www.omdbapi.com/?s="+apiData+"&apikey=225c037d")
  
  var responseJson= await response.json()
  console.log(responseJson['Search'])
  this.setState({
    listData:responseJson["Search"]
  })

  }
  render(){
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#e2b616'}
          centerComponent={{
            text: 'Film Review App',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <TextInput style={styles.Input} onChangeText={(text)=>{
          this.setState({"name":text})
        }}  value={this.state.name} placeholder="enter text here">

        </TextInput>
        <TouchableOpacity  style={styles.button}
        onPress={()=>{
          this.getData(this.state.name)
        }
         
        }
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <View style={{alignSelf:'center',width:'75%'}}>
            <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={this.state.listData}
            renderItem={ ({item, i})  => (
                <ListItem key={i} bottomDivider>
                    <Avatar source={{uri:item.Poster}} />
                    <ListItem.Content>
                     
                     <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>{item.Title}</ListItem.Title>
                    
                </ListItem.Content>
                <ListItem.Chevron onPress={
                         ()=>{
                             this.props.navigation.navigate("details",{details:item})
                         }
                     }/>
                </ListItem>
                
               
    

              )
              
                  }
            
          />

           
        </View>
      </View>
    );
  }
  
}

