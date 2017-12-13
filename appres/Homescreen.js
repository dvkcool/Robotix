import React, { Component } from 'react';

import { AppRegistry, StyleSheet, ActivityIndicator,
  ListView, Dimensions, View, Alert,Image, Platform} from 'react-native';

import {Thumbnail, Container, Content, Left, Right, Text, Body, Card, CardItem} from 'native-base';
class Mainproject extends Component {

 constructor(props) {
   super(props);
   this.state = {
     isLoading: true
   }
 }

GetItem (flower_name) {
 Alert.alert(flower_name);
 }

 componentDidMount() {

   return fetch('http://robotixnitrr.org/workshop.php')
     .then((response) => response.json())
     .then((responseJson) => {
       let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.setState({
         isLoading: false,
         dataSource: ds.cloneWithRows(responseJson),
       }, function() {
         // In this block you can do something with new state.
       });
     })
     .catch((error) => {
       console.error(error);
     });
 }

 ListViewItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
 }


 render() {
   if (this.state.isLoading) {
     return (
       <View style={{flex: 1, paddingTop: 20}}>
         <ActivityIndicator />
       </View>
     );
   }

   return (

     <View style={styles.MainContainer}>

       <ListView

         dataSource={this.state.dataSource}
         style={{paddingRight: 10,}}
         //renderSeparator= {this.ListViewItemSeparator}

         renderRow={(rowData) =>
        /*<Content>
        <View>
          <Thumbnail source={require('./appres/pics/Robo.png')}/>
          <Text> Robotix Club</Text>
        </View>
          <Image source = {{ uri: rowData.image }} style={{height: 200, width: Dimensions.get('window').width, flex: 1}}/>
          <Text onPress={this.GetItem.bind(this, rowData.name)} style={styles.textViewContainer} >{rowData.name}</Text>
        </Content>*/
        <Card style={{width: (Dimensions.get('window').width-50), flex:0, }} >
          <CardItem style={{paddingTop:0, }}>
          <Left>
          <Thumbnail  source={require('./pics/Robo.png')}/>
          <Text> Robotix Club, NIT RR </Text>
          </Left>
          <Right/>
          </CardItem >
          <CardItem style={{paddingTop:0, }}>
          <Image source = {{ uri: rowData.image }} style={{height: 220, width: (Dimensions.get('window').width-50), flex: 1}}/>
          </CardItem>
          <CardItem style={{paddingTop:0, }}>
          <Text> {rowData.name}</Text>
          </CardItem>
        </Card>

         }
       />

     </View>
   );
 }
}

const styles = StyleSheet.create({
MainContainer :{
flex:1,
alignItems: 'center',
paddingTop: (Platform.OS === 'ios') ? 20 : 0,
},
});

export default Mainproject;
