import React, {Component} from 'react';
import { View, TouchableHighlight, Platform} from 'react-native';
import { Container, Content, Text, Header, Footer, Tab, Tabs, TabHeading, Icon, Left,
          Right, Body, Thumbnail, Title, Item, Card, Input, Button, StyleProvider, Fab  } from 'native-base';
import { StackNavigator } from 'react-navigation';
import {AppLoading } from 'expo';
import Homescr from './Homescreen';
import Notification from './Notification';
import Messages from './Messages';
import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material';
import Entypo from 'react-native-vector-icons/Entypo';
const HomeScreen = ({ navigation }) => (
 <StyleProvider style={getTheme(material)}>
  <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight, }}>
    <Header hasTabs>
      <Left>
        <TouchableHighlight>
        <Icon name = "ios-menu-outline" style={{color:'#28B8E5', paddingLeft:10,}}/>
        </TouchableHighlight>
      </Left>
      <Body>
        <Text style={{fontSize:20}}>Robotix Club</Text>
      </Body>
      <Right/>
    </Header>
    <Tabs locked={true}>
    <Tab heading={ <TabHeading><Icon name="ios-home" /></TabHeading>}>
    <Homescr />
    </Tab>
    <Tab heading={ <TabHeading><TouchableHighlight onPress={() => navigation.navigate('Search')} ><Icon name="md-ionitron"/></TouchableHighlight></TabHeading>}  >
    </Tab>
    <Tab heading={ <TabHeading><Icon name="ios-flash" /></TabHeading>}>
    <Notification/>
    </Tab>
    <Tab heading={ <TabHeading><Icon name="ios-mail-outline" /></TabHeading>}>
    <Messages/>
    </Tab>
    </Tabs>
    <View>
    <Fab
    style={{ backgroundColor: 'orange' }}
    position="bottomRight">
    <Icon
         name='md-bulb'/>
    </Fab>
    </View>
  </Container>
   </StyleProvider>
);

const SearchScreen = ({ navigation }) => (
  <StyleProvider style={getTheme(material)}>
  <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,}}>
      <Header searchBar rounded>
        <Item>
        <TouchableHighlight  onPress={() => navigation.navigate('Home')}>
        <Icon name="ios-arrow-round-back-outline" style={{color:'blue',}}/>
        </TouchableHighlight>
          <Input placeholder="Search Twitter " />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
       </Header>
       <Body>
        <Card style={{flex:0, width:300}}>
          <Text> Search Results</Text>
        </Card>
        <Card  style={{flex:0, width:300}}>
          <Text> Search Results</Text>
        </Card>
        <Card  style={{flex:0, width:300}}>
          <Text> Search Results</Text>
        </Card>
        <Card  style={{flex:0, width:300}}>
          <Text> Search Results</Text>
        </Card>

       </Body>
       <Footer style={{backgroundColor:'#fff'}}>
        <Left>
          <Text style={{color:'blue',}}>All </Text>
        </Left>
        <Body>
          <Text style={{color:'grey'}}> Mentions</Text>
        </Body>
        <Right>
          <Icon name="ios-settings-outline" style={{color:'blue'}}/>
        </Right>
       </Footer>
    </Container>
    </StyleProvider>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      header: null,
    },
  },
});
export default class Mainsc extends Component {
  state = {
    fontLoaded: false,
  };

  async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
  this.setState({ fontLoaded: true });
}
render() {
  if (!this.state.fontLoaded) {
  return (
    <AppLoading
      startAsync={this.componentWillMount}
      onFinish={() => this.setState({ fontLoaded: true })}
      onError={console.warn}
    />
  );
}
else{
  return (<RootNavigator/>);

}
   }
  }
