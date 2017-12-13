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
                <Icon name='ios-person'/>
                <Text> Profile</Text>
              </CardItem>
              <CardItem>
                <Icon name='md-ionitron'/>
                <Text> Robotics Project Tutorials</Text>
              </CardItem>
              <CardItem>
                <Icon name='ios-flash'/>
                <Text> Flash Quiz </Text>
              </CardItem>
              <CardItem>
                <Icon name='md-contacts'/>
                <Text> Our Team </Text>
              </CardItem>
              <CardItem>
                <Icon name='md-school'/>
                <Text> Our Alumnus</Text>
              </CardItem>
              <CardItem>
                <Icon name='ios-cog'/>
                <Text> About us </Text>
              </CardItem>
            </Card>
          <Footer style={{ backgroundColor: '#fff'}} >
            <Card>
            <CardItem>
              <Icon name='ios-build' style={{marginLeft: 10, color:'#28B8E5'}}/>
            <Text> Know the developer</Text>
            </CardItem>
            </Card>
          </Footer>
        </Container>
      );
    }
  }
}
