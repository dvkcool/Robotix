import React, {Component } from 'react';
import {Container, Content, Header, Body, Left, Right,
Card, CardItem, Icon, Thumbnail, H2, Footer, Text } from 'native-base';
import {AppLoading } from 'expo';
export default class Sidebar extends Component{
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
      return (
        <Container>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('./pics/dvk.png')}/>
                </Left>
                <Body/>
                <Right/>
              </CardItem>
              <CardItem>
              <H2>Divyanshu Kumar</H2>
              <Right>
                <Icon name = 'ios-arrow-down-outline' style={{color:'#28B8E5'}}/>
              </Right>
              </CardItem>
              <CardItem style={{paddingTop:0}}>
                <Text style={{color: 'grey',}}>@DVK_cool</Text>
              </CardItem>
              <CardItem>
                <Text>
                225 <Text style={{color: 'grey',}}> Following </Text> 56
                <Text style={{color: 'grey',}}> Followers </Text>
                </Text>
              </CardItem>
              <CardItem>
                <Icon name='ios-person-outline'/>
                <Text> Profile</Text>
              </CardItem>
              <CardItem>
                <Icon name='ios-list-box-outline'/>
                <Text> Lists</Text>
              </CardItem>
              <CardItem>
                <Icon name='ios-flash-outline'/>
                <Text> Moments</Text>
              </CardItem>
              <CardItem>
                <Icon name='ios-browsers-outline'/>
                <Text> Highlights</Text>
              </CardItem>
              <CardItem>
                <Text> Setting And Privacy</Text>
              </CardItem>
              <CardItem>
                <Text> Help Center</Text>
              </CardItem>
            </Card>
          <Footer style={{ backgroundColor: '#fff'}} >
            <Left>
              <Icon name='ios-moon-outline' style={{marginLeft: 10, color:'#28B8E5'}}/>
            </Left>
            <Right>
              <Icon name='ios-apps-outline' style={{marginRight: 10 , color:'#28B8E5'}}/>
            </Right>
          </Footer>
        </Container>
      );
    }
  }
}
